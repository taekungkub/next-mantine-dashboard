import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"
import { includes } from "lodash"

const isUserRoute = (pathname: string) => {
  return pathname.startsWith("/protected/user")
}

const isAdminRoute = (pathname: string) => {
  return pathname.startsWith("/protected/admin")
}

const isSuperRoute = (pathname: string) => {
  return pathname.startsWith("/protected/superadmin")
}

export default withAuth(function middleware(req) {
  const token = req.nextauth.token
  const { pathname } = req.nextUrl
  const role = req.headers.get("authorization")

  if (isUserRoute(pathname) && !includes(["user", "admin", "superadmin"], token?.role)) {
    return NextResponse.redirect(new URL("/api/auth/unauthorized", req.url))
  }

  if (isAdminRoute(pathname) && !includes(["admin", "superadmin"], token?.role)) {
    return NextResponse.redirect(new URL("/api/auth/unauthorized", req.url))
  }

  if (isSuperRoute(pathname) && !includes(["superadmin"], token?.role)) {
    return NextResponse.redirect(new URL("/exception/403", req.url))
  }

  if (pathname.startsWith("/superadmin") && !includes(["superadmin"], token?.role)) {
    return NextResponse.redirect(new URL("/exception/403", req.url))
  }

  return NextResponse.next()
}, {})

export const config = { matcher: ["/protected/admin", "/protected/user", "/protected/superadmin", "/superadmin"] }
