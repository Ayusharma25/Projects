export class UserController {

    signUp(req, res) {
        const { name, email, password, type } = req.body;
        const newUser = UserModel.SignUp(name, email, password, type);
        res.status(201).json(newUser);
    }

    signIn(req, res) {}

}
