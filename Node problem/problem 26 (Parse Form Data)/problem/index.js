// Please don't change the pre-written code
import express from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import { renderBlogForm, renderBlogs, addBlog } from "./src/controllers/blog.controller.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.use(expressEjsLayouts);
app.use(express.urlencoded({ extended: true })); // Middleware to parse form data

// Route to render the blog form
app.get("/createblog", renderBlogForm);

// Route to render all blogs
app.get("/", renderBlogs);

// Route to add a new blog
app.post("/addblog", addBlog);

export default app;
