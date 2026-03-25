import express from 'express';
import productRouter from './src/features/product/product.routes.js';
import bodyParser from 'body-parser';


const server = express();

server.use(bodyParser.json());

server.use("/api/products", productRouter);
server.get('/', (req, res) => {
  res.send('Welcome to Ecommerce APIs');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});