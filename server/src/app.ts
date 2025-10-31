import express,{ type Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { requestLogger } from "./middlewares/request-logger.middleware.js";
import { env } from "process";
import routes from "./routes/index.routes.js";

dotenv.config();

const app: Application = express();

app.use(requestLogger);
app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api", routes);

export default app;
