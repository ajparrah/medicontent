import express from 'express';
import Container from 'typedi';
import { CategoryController } from '@controllers';

export const categoryRouter = express.Router();
const categoryController = Container.get(CategoryController);

categoryRouter.get('/', categoryController.get.bind(categoryController));
categoryRouter.post('/', categoryController.create.bind(categoryController));
