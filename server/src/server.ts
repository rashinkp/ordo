
import app from "./app.js";
import { connectDB } from "./config/db.config.js";
import { env } from "./config/env.config.js";
import logger from "./utils/logger.utils.js";

const PORT = env.PORT || 4000;
connectDB();

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
