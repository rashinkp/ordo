import { type Response } from "express";
import { env } from "../config/env.config.js";

const isProd = env.NODE_ENV === "production";

export const cookieUtils = {
  setAccessCookie: (res: Response, accessToken: string) => {
    res.cookie("access_token", accessToken, {
      httpOnly: true,
      secure: isProd,
      sameSite: "strict",
      maxAge: 15 * 60 * 1000, // 15 mins
      path: "/",
    });
  },

  clearAccessCookie: (res: Response) => {
    res.clearCookie("access_token", {
      httpOnly: true,
      secure: isProd,
      sameSite: "strict",
      path: "/",
    });
  },
};
