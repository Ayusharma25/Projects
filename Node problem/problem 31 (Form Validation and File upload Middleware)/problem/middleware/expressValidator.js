import { body, validationResult } from "express-validator";

export const formValidation = async (req, res, next) => {
  await body("name")
    .notEmpty()
    .withMessage("Name is required")
    .run(req);

  await body("email")
    .isEmail()
    .withMessage("Enter a valid email")
    .run(req);

  if (!req.file) {
    return res.send("Profile image is required");
  }

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.send(errors.array()[0].msg);
  }

  next();
};
