import fs from "fs";

// Function to write a blog to a file
export const writeBlog = (filePath, content) => {
  // Append content to the file, without adding a newline
  fs.appendFileSync(filePath, content, "utf8");
};

// Function to publish a blog (read and return the content of the file)
export const publishBlog = (filePath) => {
  // Read and return the content of the file
  return fs.readFileSync(filePath, "utf8");
};
