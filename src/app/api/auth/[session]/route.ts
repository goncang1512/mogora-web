import userModel from "@/lib/models/user.model";
import { verifyRefreshToken } from "@/lib/utils/jwt";
import CustomError from "@/lib/utils/throwerror";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const refresh_token = req.headers.get("Authorization")?.split("Bearer ")[1];

    const token = await verifyRefreshToken(String(refresh_token));

    const user = await userModel.getUserById(Number(token?.id));

    return NextResponse.json({
      status: true,
      statusCode: 200,
      message: "Success get token",
      user,
      isauthenticated: "authenticated",
      results: null,
    });
  } catch (error) {
    if (error instanceof CustomError) {
      return NextResponse.json({
        status: false,
        statusCode: error.statusCode,
        message: error.message,
        isauthenticated: "unauthenticated",
        user: null,
        results: null,
      });
    }

    return NextResponse.json({
      status: false,
      statusCode: 500,
      message: "Invalid Internal Server",
      results: null,
      user: null,
      isauthenticated: "unauthenticated",
    });
  }
}
