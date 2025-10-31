import { Router, type Request, type Response } from "express";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Rule Violation Tracker API (TypeScript) is running 🚀",
  });
});

export default router;
