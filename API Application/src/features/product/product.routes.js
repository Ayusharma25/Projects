import express from 'express';
import ProductController from './product.controller.js';

const router = express.Router();

const productController = new ProductController();

router.get('/', productController.getAllProducts);
router.post('/', productController.addProduct);
router.get('/:id', productController.getOneProduct);
router.post('/:id/rate', productController.rateProduct);

export default router;