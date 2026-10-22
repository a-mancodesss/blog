import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};

// Next.js 16 renamed middleware to proxy. It keeps the same API and runs on
// the Node.js runtime.
// FOR MORE INFORMATION CHECK: https://nextjs.org/docs/app/building-your-application/routing/proxy