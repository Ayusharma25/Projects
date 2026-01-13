export const formValidationMiddleware = (req, res, next) => {
  const { name, mobile } = req.body ?? {};
  const errors = {};

  // NAME VALIDATION
  // Expected by test: /enter valid name of length greater than 4/i
  if (typeof name !== "string" || name.trim().length <= 4) {
    errors.name = "enter valid name of length greater than 4";
  }

  // MOBILE VALIDATION
  // Expected by test: /enter valid mobile number of 10 digits/i
  const mobileStr = String(mobile ?? "").trim();
  const mobileDigitsOnly = /^\d{10}$/.test(mobileStr);

  if (!mobileDigitsOnly) {
    errors.mobile = "enter valid mobile number of 10 digits";
  }

  // If ANY validation error occurs, return 401 + error object
  if (Object.keys(errors).length > 0) {
    return res.status(401).json(errors);
  }

  // If everything is valid → pass control
  return next();
};
