import mongoose from "mongoose";
import config from "./config";
import logger from "./logger";
import userService from "../res/user/user.services";

export default async function connection() {
  logger.info("Establishing DB connection");
  await mongoose
    .connect(config.DB_URI)
    .then(async () => {
      logger.info("DB connection sucessful");

      // initialize services
      logger.info("\n");
      logger.info("Initializing services");
      await userService.init();
      logger.info("Services initialized");
      logger.info("\n");
    })
    .catch((err: Error) => {
      logger.error(`DB connection failed - ${err.message}`);
    });
}
