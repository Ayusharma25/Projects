import JobModel from "../models/job.model.js";
import { v4 as uuid } from "uuid";

export default class JobController {
  static landing(req, res) {
    res.render("layout", { body: "landing-page" });
  }

  static list(req, res) {
    res.render("layout", {
      body: "list-all-jobs",
      jobs: JobModel.getAll(),
    });
  }

  static details(req, res) {
    res.render("layout", {
      body: "job-details",
      data: JobModel.getById(req.params.id),
    });
  }

  static newJob(req, res) {
    res.render("layout", { body: "new-job" });
  }

  static create(req, res) {
    JobModel.create({
      ...req.body,
      logo: req.file?.filename,
      recruiterId: req.session.user.id,
      jobposted: new Date(),
    });
    res.redirect("/jobs");
  }

  static updateForm(req, res) {
    res.render("layout", {
      body: "update-job",
      job: JobModel.getById(req.params.id),
    });
  }

  static update(req, res) {
    JobModel.update(req.params.id, req.body);
    res.redirect(`/jobs/${req.params.id}`);
  }

  static delete(req, res) {
    JobModel.delete(req.params.id);
    res.redirect("/jobs");
  }

  static applicants(req, res) {
    res.render("layout", {
      body: "all-applicants",
      allApplicants: JobModel.getById(req.params.id).applicants,
    });
  }

  static apply(req, res) {
    JobModel.addApplicant(req.params.id, {
      id: uuid(),
      ...req.body,
      resumePath: req.file.filename,
    });
    req.sendMail(req.body.email);
    res.redirect("/jobs");
  }
}