import { z } from "zod";

const createUserValidator = z.object(
  {
    body: z.object(
      {
        email: z.string({ required_error: "Email is required" }).email(),
        firstName: z
          .string({ required_error: "First name is required" })
          .min(3, "First name is too short"),
        lastName: z
          .string({ required_error: "Last name is required" })
          .min(3, "Last name is too short"),
        password: z
          .string({ required_error: "Password is required" })
          .min(6, "Password must be a minimum of 6 characters"),
        // role: z.enum(["admin", "user"]),
      },
      { required_error: "Required fields are missing" },
    ),
  },
  { required_error: "Required fields are missing" },
);

const loginUserValidator = z.object(
  {
    body: z.object(
      {
        email: z.string({ required_error: "Email is required" }).email(),
        password: z
          .string({ required_error: "Password is required" })
          .min(6, "Password must be a minimum of 6 characters"),
      },
      { required_error: "Required fields are missing" },
    ),
  },
  { required_error: "Required fields are missing" },
);

const userValidator = {
  createUserValidator,
  loginUserValidator,
};

export default userValidator;

export type UserValidatorType = {
  Create: z.infer<typeof createUserValidator>;
  Login: z.infer<typeof loginUserValidator>;
};
