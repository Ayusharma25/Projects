import express from "express";
import JobController from "../controllers/job.controller.js";
import { upload } from "../middlewares/upload.middleware.js";
import { mailer } from "../middlewares/mail.middleware.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", JobController.landing);
router.get("/jobs", JobController.list);
router.get("/jobs/:id", JobController.details);

router.get("/postjob", isAuth, JobController.newJob);
router.post("/job", isAuth, upload.single("logo"), JobController.create);

router.get("/job/update/:id", isAuth, JobController.updateForm);
router.post("/job/update/:id", isAuth, JobController.update);
router.get("/job/delete/:id", isAuth, JobController.delete);

router.get("/jobs/:id/applicants", isAuth, JobController.applicants);
router.post("/apply/:id", upload.single("resume"), mailer, JobController.apply);

export default router;
