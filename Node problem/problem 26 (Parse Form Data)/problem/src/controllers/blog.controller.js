// Please don't change the pre-written code
import { blogs } from "../models/blog.model.js";

export const renderBlogForm = (req, res) => {
  res.render("addBlogForm");
};

export const renderBlogs = (req, res) => {
  res.render("blogs", { blogs });
};

export const addBlog = (req, res) => {
  const { title, description, img } = req.body;
  if (title && description && img) {
    blogs.push({ title, description, img });
  }
  res.redirect("/");
};
