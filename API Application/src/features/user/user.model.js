export class UserModel {
  constructor(name, email, password, type) {
    this.id = null;
    this.name = name;
    this.email = email;
    this.password = password;
    this.type = type;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  static SignUp(name, email, password, type) {
    const newUser = new UserModel(name, email, password, type);
    // newUser.id = users.length + 1;
    users.push(newUser);
    return newUser;
  }

  static SignIn(email, password) {
    const user = users.find(u => u.email === email && u.password === password);
    return user;
  }
}

var users = [
    {
        name: 'Seller User',
        email: 'seller@example.com',
        password: 'Password',
        type: 'seller'
    },
];