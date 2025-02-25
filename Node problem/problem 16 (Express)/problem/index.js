// Please don't change the pre-written code
// Import the necessary modules here
// Write your code here
import express from 'express';

const server = express();

server.get(
    '/', 
    (req, res, next) => {
        console.log('Hello World! This is from 1st middleware Express server');
        next();
    },

    (req, res) => {
        res.send('Hello World! This is Express server');
    });

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});

export { server };