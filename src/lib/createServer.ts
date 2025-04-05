import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import router from "./router";
import { errorMiddleware } from "../middlewares/error-handler";
import logger from "./logger";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(helmet());

app.use(function (req: Request, res: Response, next: NextFunction) {
  logger.info(`[${req.method}] ${req.baseUrl}${req.url}`);
  next();
});

router(app);
app.use(errorMiddleware);

export default app;
