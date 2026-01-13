import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

const users = [];

export default class UserModel {
  static add(name, email, password) {
    users.push({
      id: uuid(),
      name,
      email,
      password: bcrypt.hashSync(password, 10),
    });
  }

  static findByEmail(email) {
    return users.find((u) => u.email === email);
  }

  static validate(email, password) {
    const user = this.findByEmail(email);
    if (!user) return null;
    return bcrypt.compareSync(password, user.password) ? user : null;
  }
}
