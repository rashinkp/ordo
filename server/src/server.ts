import app from "./app.js";
import { connectDB } from "./config/db.config.js";
import { env } from "./config/env.config.js";
import logger from "./utils/logger.utils.js";
import {
  globalErrorHandler,
  notFoundHandler,
} from "./middlewares/error-handler.middleware.js";
import { limiter } from "./middlewares/rate-limitter.middleware.js";

// Connect to database
connectDB();

// Apply global rate limiter
app.use(limiter);

// 404 handler
app.use(notFoundHandler);

// Global error handler
app.use(globalErrorHandler);

// Start server
const PORT = env.PORT || 4000;
app.listen(PORT, () => {
  logger.info(`🚀 Server running on port ${PORT}`);
});
