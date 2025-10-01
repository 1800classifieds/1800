import type { NextRequest } from "next/server"
import { updateSession } from "@/lib/auth/session"

export async function middleware(request: NextRequest) {
  return await updateSession(request)
}

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*", "/profile/:path*"],
}
