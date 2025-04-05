import { Request, Response } from "express";
import { UserValidatorType } from "./user.validator";
import Exception from "../../lib/Exception";

export async function signup(
  _req: Request,
  _res: Response<object, { parsed: UserValidatorType["Create"] }>,
) {
  try {
    // const { parsed } = _res.locals;
    // const { email, password, firstName, lastName } = parsed.body;

    // TODO: Implement signup logic
    throw new Exception({
      message: "Signup not implemented",
      code: 501,
    });
  } catch (error) {
    if (error instanceof Exception) {
      throw error;
    }
    throw new Exception({
      message: error instanceof Error ? error.message : "Failed to signup",
      code: 400,
    });
  }
}
