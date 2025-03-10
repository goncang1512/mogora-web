import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

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
