import jwt, {type SignOptions,type Secret, type JwtPayload } from "jsonwebtoken";
import { env } from "./env.config.js";

const ACCESS_SECRET = env.ACCESS_TOKEN_SECRET as Secret;
const REFRESH_SECRET = env.REFRESH_TOKEN_SECRET as Secret;

export const jwtConfig = {
  signAccessToken: (payload: Record<string, any>) => {
    const options: SignOptions = {
      expiresIn: env.ACCESS_TOKEN_EXPIRES_IN,
      issuer: "your-app",
      audience: "user",
    };
    return jwt.sign(payload, ACCESS_SECRET, options);
  },

  signRefreshToken: (payload: Record<string, any>) => {
    const options: SignOptions = {
      expiresIn: env.REFRESH_TOKEN_EXPIRES_IN,
      issuer: "your-app",
      audience: "user",
    };
    return jwt.sign(payload, REFRESH_SECRET, options);
  },

  verifyAccessToken: (token: string): JwtPayload => {
    return jwt.verify(token, ACCESS_SECRET) as JwtPayload;
  },

  verifyRefreshToken: (token: string): JwtPayload => {
    return jwt.verify(token, REFRESH_SECRET) as JwtPayload;
  },
};
