import { SignJWT, jwtVerify } from "jose";
import { statusAuth, UserType } from "./types";
import { NextRequest } from "next/server";
import { JWT } from "next-auth/jwt";

const ACCESS_SECRET = process.env.ACCESS_SECRET || "secret123";
const REFRESH_SECRET = process.env.REFRESH_SECRET || "refresh456";

// Konversi secret menjadi Uint8Array
const accessKey = new TextEncoder().encode(ACCESS_SECRET);
const refreshKey = new TextEncoder().encode(REFRESH_SECRET);

export const generateAccessToken = async (user: JWT) => {
  return new SignJWT({ id: user.id, email: user.email })
    .setProtectedHeader({ alg: "HS256" })
    .sign(accessKey);
};

export const generateRefreshToken = async (user: UserType) => {
  return new SignJWT({ id: user.id })
    .setProtectedHeader({ alg: "HS256" })
    .sign(refreshKey);
};

export const verifyAccessToken = async (
  token: string
): Promise<{ id: number }> => {
  const { payload } = await jwtVerify(token, accessKey, {
    algorithms: ["HS256"],
  });
  return payload as { id: number };
};

export const verifyRefreshToken = async (
  token: string
): Promise<{ id: number }> => {
  const { payload } = await jwtVerify(token, refreshKey, {
    algorithms: ["HS256"],
  });
  return payload as { id: number };
};

export const checkSession = async (
  req: NextRequest
): Promise<{ user: UserType | null; status: statusAuth }> => {
  const accessToken = req.cookies.get("access_token")?.value;

  const res = await fetch(`${req.nextUrl.origin}/api/auth/session`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await res.json();

  return { user: data.user, status: data.isauthenticated };
};
