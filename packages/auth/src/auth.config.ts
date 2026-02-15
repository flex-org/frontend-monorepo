// src/auth.config.ts
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },
  },
  providers: [],
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: true,
        // 👇 This lets 'student.platme.com' see the cookie from 'platme.com'
        domain:
          process.env.NODE_ENV === "production" ? ".platme.com" : undefined,
      },
    },
  },
} satisfies NextAuthConfig;
