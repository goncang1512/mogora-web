import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/components") {
    return NextResponse.redirect(new URL("/components/accordion", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/components"],
};
