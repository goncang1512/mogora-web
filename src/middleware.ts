import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Session } from "./lib/auth";
import { betterFetch } from "@better-fetch/fetch";

export default async function middleware(req: NextRequest) {
  const { data: session } = await betterFetch<Session>(
    "/api/auth/get-session",
    {
      baseURL: req.nextUrl.origin,
      headers: {
        cookie: req.headers.get("cookie") || "",
      },
    }
  );
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/dashboard") && !session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (
    pathname.startsWith("/dashboard/create") &&
    session?.user?.role !== "Admin"
  ) {
    return NextResponse.redirect(new URL("/dashboard/product", req.url));
  }

  if (pathname === "/components") {
    return NextResponse.redirect(new URL("/components/accordion", req.url));
  } else if (pathname === "/docs") {
    return NextResponse.redirect(new URL("/docs/introduction", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/components", "/docs", "/register", "/login"],
};
