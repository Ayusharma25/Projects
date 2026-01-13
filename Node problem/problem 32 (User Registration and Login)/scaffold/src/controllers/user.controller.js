import { registerUser, authenticateUser } from "../models/user.model.js";

export default class UserController {
  getRegister = (req, res) => {
    res.render("user-register");
  };

  getLogin = (req, res) => {
    res.render("user-login");
  };

  addUser = (req, res) => {
    registerUser(req.body);
    return res.status(200).render("user-login");
  };

  loginUser = (req, res) => {
  const isValid = authenticateUser(req.body);

  if (isValid) {
    return res.status(200).json({
      message: "login successful"
    });
  }

  return res.status(200).json({
    message: "login failed"
  });
};

}
