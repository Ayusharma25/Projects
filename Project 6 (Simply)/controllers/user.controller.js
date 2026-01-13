import UserModel from "../models/user.model.js";

export default class UserController {
  static loginPage(req, res) {
    res.render("layout", { body: "user-login" });
  }

  static register(req, res) {
    const { name, email, password } = req.body;
    UserModel.add(name, email, password);
    res.redirect("/login");
  }

  static login(req, res) {
    const user = UserModel.validate(req.body.email, req.body.password);
    if (!user) return res.redirect("/login");
    req.session.user = user;
    res.redirect("/jobs");
  }

  static logout(req, res) {
    req.session.destroy(() => res.redirect("/"));
  }
}
