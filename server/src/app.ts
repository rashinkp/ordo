import express, { type Application } from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { requestLogger } from "./middlewares/request-logger.middleware.js";
import routes from "./routes/index.routes.js";
import { env } from "./config/env.config.js";

const app: Application = express();

// Security hardening
app.disable("x-powered-by");
app.set("trust proxy", 1);

// Logging middleware
app.use(requestLogger);

// Security headers
app.use(helmet());

// // Compression for better performance
// app.use(compression());

// CORS configuration
app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  })
);

// Request parsers
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api", routes);

export default app;

