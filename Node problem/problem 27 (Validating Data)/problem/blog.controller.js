// blog.controller.js

// Render the add blog form with default empty errors and success
export const renderBlogForm = (req, res) => {
  return res.render("addBlog", { errors: {}, success: "" });
};

// validateBlog - validates title, description and image URL
export const validateBlog = (req, res) => {
  const { title = "", description = "", image = "" } = req.body || {};
  const errors = {};

  // Helper: validate http/https URLs
  const isValidUrl = (value) => {
    if (!value || String(value).trim() === "") return false;
    try {
      const url = new URL(String(value).trim());
      return url.protocol === "http:" || url.protocol === "https:";
    } catch {
      return false;
    }
  };

  // Title validation: not empty, at least 3 chars
  const titleTrim = String(title).trim();
  if (titleTrim.length === 0) {
    errors.title = "The title field should not be empty";
  } else if (titleTrim.length < 3) {
    errors.title = "The title field should contain at least 3 characters";
  }

  // Description validation: not empty, at least 10 chars
  const descTrim = String(description).trim();
  if (descTrim.length === 0) {
    errors.description = "The description field should not be empty";
  } else if (descTrim.length < 10) {
    errors.description = "The description field should contain at least 10 characters";
  }

  // Image URL validation: must be a valid http/https URL
  const imageTrim = String(image).trim();
  if (!isValidUrl(imageTrim)) {
    errors.image = "The image URL provided should be a valid URL";
  }

  // If validation fails -> 401 and render view with errors
  if (Object.keys(errors).length > 0) {
    return res.status(401).render("addBlog", { errors, success: "" });
  }

  // On success -> 201 and render view with success message that matches tests
  return res.status(201).render("addBlog", { errors: {}, success: "Validation successful!" });
};
