import { Router } from "express";
import schemaValidator from "../../middlewares/schema-validator";
import { signup } from "./user.controller";
import userValidator from "./user.validator";

export default function userRouter() {
  const router = Router();

  router.post(
    "/signup",
    schemaValidator(userValidator.createUserValidator),
    signup,
  );

  return router;
}
