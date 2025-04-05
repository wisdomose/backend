import { Router } from "express";
import schemaValidator from "../../middlewares/schema-validator";
import { signup } from "./user.controller";
import userValidator from "./user.validator";

export default function userRouter() {
  const router = Router();

  /**
   * @swagger
   * /v1/user/signup:
   *  post:
   *    summary: User signup
   *    tags: [User]
   *    requestBody:
   *       required: true
   *       content:
   *         application/json:
   *          schema:
   *            $ref: '#/components/schemas/user/signup'
   *    responses:
   *      '201':
   *        description: A successful response
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                id:
   *                  type: string
   *                email:
   *                  type: string
   *                createdAt:
   *                  type: string
   *                  format: date-time
   *      '400':
   *        description: Bad Request
   *      '500':
   *        description: Internal Server Error
   */

  router.post(
    "/signup",
    schemaValidator(userValidator.createUserValidator),
    signup,
  );

  return router;
}
