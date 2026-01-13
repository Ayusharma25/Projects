import { v4 as uuid } from "uuid";

const jobs = [];

export default class JobModel {
  static create(job) {
    jobs.push({ ...job, id: uuid(), applicants: [] });
  }

  static getAll() {
    return jobs;
  }

  static getById(id) {
    return jobs.find((j) => j.id === id);
  }

  static update(id, data) {
    Object.assign(this.getById(id), data);
  }

  static delete(id) {
    const index = jobs.findIndex((j) => j.id === id);
    jobs.splice(index, 1);
  }

  static addApplicant(id, applicant) {
    this.getById(id).applicants.push(applicant);
  }
}
