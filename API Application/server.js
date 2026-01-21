import express from 'express';
import * as ProductRouter from './src/features/product/product.routes.js';

const server = express();

server.use("/api/products", ProductRouter);

server.get('/', (req, res) => {
  res.send('Welcome to Ecommerce APIs');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});