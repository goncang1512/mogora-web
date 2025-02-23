import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/component") {
    return NextResponse.redirect(new URL("/component/accordion", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/component"],
};
