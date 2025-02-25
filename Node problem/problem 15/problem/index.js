import http from "http";
import fs from "fs";
import EventEmitter from "events";
import nodemailer from "nodemailer";

class CustomEvent extends EventEmitter {
  mailSent(email) {
    this.emit("mailSent", email);
  }
}

const customEvent = new CustomEvent();

const server = http.createServer((req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "codingninjas2k16@gmail.com",
      pass: "slwvvlczduktvhdj", // Ensure to replace this with a secure method of storing credentials.
    },
  });

  if (req.method === "POST") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      const { name, email, message } = JSON.parse(data);

      const queryString = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;

      // Append user query to "queries.txt"
      fs.appendFile("queries.txt", queryString, (err) => {
        if (err) {
          console.error("Error appending to file:", err);
          res.writeHead(500, { "Content-Type": "text/plain" });
          return res.end("Internal Server Error");
        }
      });

      // Nodemailer mailOptions
      const mailOptions = {
        from: "codingninjas2k16@gmail.com",
        to: "ayush200225@gmail.com",
        subject: "Query received",
        text: "We have received your query and will get back to you soon.",
      };

      // Send confirmation email
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error("Error sending email:", err);
          res.writeHead(500, { "Content-Type": "text/plain" });
          return res.end("Internal Server Error");
        }

        // Emit "mailSent" event
        customEvent.mailSent(email);

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Query received and email sent");
      });
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Coding Ninjas!");
  }
});

const Solution = () => {
  customEvent.addListener("mailSent", (email) => {
    console.log("Custom event 'mailSent' emitted");
    console.log(`Confirming that the email has been sent successfully to ${email}`);
  });
};

export default server;
export { server, CustomEvent, Solution };