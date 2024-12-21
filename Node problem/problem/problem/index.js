// Please don't change the pre-written code
// Import the necessary modules here
const http = require("http")

const server = http.createServer((req, res) => {
    res.end("Response received at port 8080")
})

server.listen(8080, () => {
    console.log("Server is listening at port 8080")
})
// Write your code here

module.exports = server;
