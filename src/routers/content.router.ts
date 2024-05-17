import express from 'express';
import Container from 'typedi';
import { ContentController } from '@controllers';

export const contentRouter = express.Router();
const contentController = Container.get(ContentController);

contentRouter.get('/', contentController.get.bind(contentController));
contentRouter.get('/:id', contentController.getById.bind(contentController));
contentRouter.post('/', contentController.create.bind(contentController));
