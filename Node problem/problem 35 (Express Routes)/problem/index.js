// Import the necessary modules here

import express from "express";
import tweetRoutes from "./src/features/tweet/tweet.routes.js";

const app = express();

// Middleware for accessing tweet routes
app.use("/api/tweets", tweetRoutes);

app.listen(5000, () => {
  console.log("server is listening at port 5000");
});
