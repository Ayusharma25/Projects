import express from 'express';
import ProductController from './user.controller.js';
import {upload} from '../../middlewares/fileupload.middleware.js';

const userRouter = express.Router();

const userController = new UserController();

userRouter.get('/filter', userController.filterProducts);
userRouter.get('/', userController.getAllProducts);
userRouter.post('/', upload.single('imageUrl'), userController.addProduct);
userRouter.get('/:id', userController.getOneProduct);
userRouter.post('/:id/rate', userController.rateProduct);

export default userRouter;