import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  //Token exists if user is loggen in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname, origin } = req.nextUrl;
  //Allow if ... true
  // 1. It's a request for next-auth session & provider fetching
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  if (!token && pathname !== "/login") {
    return NextResponse.redirect(`${origin}/login`);
  }
}
