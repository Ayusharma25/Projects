import { userModel } from "../models/users.model.js";

export const userController = async (req, res) => {
  try {
    const users = await userModel(); // Fetch user details
    res.render("index", { users }); // Render users data in index.ejs
  } catch (error) {
    console.error("Error in userController:", error);
    res.status(500).send("Internal Server Error");
  }
};
