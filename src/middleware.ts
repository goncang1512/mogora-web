import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkSession } from "./lib/utils/jwt";

const authPage = ["/register", "/login"];

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const session = await checkSession(req);

  if (authPage.includes(pathname) && session?.status === "authenticated") {
    return NextResponse.redirect(new URL("/dashboard/create", req.url));
  }

  if (
    pathname.startsWith("/dashboard") &&
    session.status === "unauthenticated"
  ) {
    return NextResponse.redirect(new URL("/login", req.url));
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
