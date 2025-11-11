import type { Response } from "express";
import { env } from "../config/env.config.js";

const isProd = env.NODE_ENV === "production";

export const cookieUtils = {
  setAuthCookies: (res: Response, accessToken: string) => {
    res.cookie("access_token", accessToken, {
      httpOnly: true, // cannot be accessed by JS
      secure: isProd, // only over HTTPS in prod
      sameSite: "strict", // protects from CSRF
      maxAge: 15 * 60 * 1000, // 15 minutes
      path: "/",
    });
  },

  clearAuthCookies: (res: Response) => {
    res.clearCookie("access_token", {
      httpOnly: true,
      secure: isProd,
      sameSite: "strict",
      path: "/",
    });
  },
};
