import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import jobRoutes from "./routes/job.routes.js";
import { trackLastVisit } from "./middlewares/lastVisit.middleware.js";

dotenv.config();
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(trackLastVisit);

app.use(
  session({
    secret: "easily_secret_key",
    resave: false,
    saveUninitialized: false,
  })
);

// expose user to all views
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

app.use("/", authRoutes);
app.use("/", jobRoutes);

app.use("*", (req, res) => {
  res.status(404).render("layout", { body: "404" });
});

app.listen(3200, () => {
  console.log("Server running at http://localhost:3200");
});
