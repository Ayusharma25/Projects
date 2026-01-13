import nodemailer from "nodemailer";
import fs from "fs";

export const mailer = (req, res, next) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  req.sendMail = (to) => {
    const html = fs.readFileSync("mailTemplate.html", "utf-8");
    transporter.sendMail({
      from: "Easily <no-reply@easily.com>",
      to,
      subject: "Application Received",
      html,
    });
  };

  next();
};
