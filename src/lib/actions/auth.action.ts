"use server";
import CustomError from "../utils/throwerror";
import { ResponseType, statusAuth, UserType } from "../utils/types";
import userModel from "../models/user.model";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
} from "../utils/jwt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export const getServerSession = async (): Promise<
  ResponseType<{ user: UserType | null; isauthenticated: statusAuth }>
> => {
  const cookieStore = await cookies();
  try {
    const access_token = cookieStore.get("access_token")?.value;
    const refresh_token = cookieStore.get("refresh_token")?.value;
    let user;

    if (access_token) {
      const decoded = await verifyAccessToken(access_token);
      user = await userModel.getUserById(Number(decoded?.id));
    }

    if (!user) {
      const token = await verifyRefreshToken(String(refresh_token));
      user = await userModel.getUserById(Number(token?.id));

      if (!user) {
        throw new CustomError("User not found", 404);
      }

      const newAccessToken = await generateAccessToken(user);

      cookieStore.set("access_token", newAccessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 15, // 15 menit
      });
    }

    return {
      status: true,
      statusCode: 200,
      message: "Success get token",
      user,
      isauthenticated: "unauthenticated",
      results: null,
    };
  } catch (error) {
    if (error instanceof CustomError) {
      return {
        status: false,
        statusCode: error.statusCode,
        message: error.message,
        isauthenticated: "unauthenticated",
        user: null,
        results: null,
      };
    }

    return {
      status: false,
      statusCode: 500,
      message: "Invalid Internal Server",
      results: null,
      user: null,
      isauthenticated: "unauthenticated",
    };
  }
};

export const loginUser = async (formData: FormData): Promise<ResponseType> => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    if (!email || !password) {
      throw new CustomError("Invalid data. Try again.", 422);
    }

    const user = await userModel.getUserByEmail(email);

    if (!user) {
      throw new CustomError("User not found", 422);
    }

    if (user.password !== password) {
      throw new CustomError("Invalid password", 422);
    }

    // 🔹 Buat access_token & refresh_token
    const accessToken = await generateAccessToken(user);
    const refreshToken = await generateRefreshToken(user);

    const cookieStore = await cookies();
    cookieStore.set("access_token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 15, // 15 menit
    });

    cookieStore.set("refresh_token", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 hari
    });

    return {
      status: true,
      statusCode: 200,
      message: "Success login",
      results: {
        redirect: "/dashboard/create",
      },
    };
  } catch (error) {
    if (error instanceof CustomError) {
      return {
        status: false,
        statusCode: error.statusCode,
        message: error.message,
        results: null,
      };
    }

    return {
      status: false,
      statusCode: 500,
      message: "Invalid Internal Server",
      results: error,
    };
  }
};

export const logout = async () => {
  const cookieStore = await cookies();

  cookieStore.delete("access_token");
  cookieStore.delete("refresh_token");

  redirect("/login");
};

export const checkSession = async (
  req: NextRequest
): Promise<{ user: UserType | null; isauthenticated: statusAuth }> => {
  const res = await fetch(`${req.nextUrl.origin}/api/auth/session`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });

  const data = await res.json();
  return { user: data?.user, isauthenticated: data?.isauthenticated };
};
