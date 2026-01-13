import express, { urlencoded } from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import UserController from "./src/controllers/user.controller.js";

const app = express();
const userController = new UserController();

/* ✅ 1. body parsers FIRST */
app.use(express.json());
app.use(urlencoded({ extended: true }));

/* ✅ 2. view engine */
app.use(expressEjsLayouts);
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

/* ✅ 3. routes LAST */
app.get("/register", userController.getRegister);
app.post("/register", userController.addUser);

app.get("/login", userController.getLogin);
app.post("/login", userController.loginUser);

export default app;
