import { Router } from "express";
// import {
//   registerUser,
//   loginUser,
//   logoutUser,
//   refreshToken,
//   getCurrentUser,
// } from "../controllers/auth.controller.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";

const router:Router = Router();

// router.post("/register", registerUser);
// router.post("/login", loginUser);
// router.post("/refresh", refreshToken);
// router.post("/logout", authenticateUser, logoutUser);
// router.get("/me", authenticateUser, getCurrentUser);


export default router;
