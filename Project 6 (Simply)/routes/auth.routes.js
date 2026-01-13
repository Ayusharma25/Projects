import express from "express";
import UserController from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", UserController.loginPage);
router.get("/login", UserController.loginPage);
router.post("/login", UserController.login);
router.post("/register", UserController.register);
router.get("/logout", UserController.logout);

export default router;
