import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";

    // Collect the data chunks
    req.on("data", (chunk) => {
      body += chunk;
    });

    // Handle data once it's fully received
    req.on("end", () => {
      try {
        // Append the received data to "data.txt" (synchronously)
        fs.appendFileSync("data.txt", body + "\n", "utf8");

        // Read the new content of "data.txt"
        const fileContent = fs.readFileSync("data.txt", "utf8");

        // Print the content to the console
        console.log(fileContent);

        // Send a success response to the client
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("data received");
      } catch (err) {
        console.error(err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("An error occurred");
      }
    });
  } else {
    // Handle non-POST requests
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Only POST requests are supported");
  }
});

export default server;
