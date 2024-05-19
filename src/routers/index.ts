import express from 'express';
import Container from 'typedi';
import { UserController } from '@controllers';
import { categoryRouter } from './category.router';
import { topicRouter } from './topic.router';
import { contentRouter } from './content.router';
import { userRouter } from './user.router';
import { IsAuthenticatedMiddleware } from '@middlewares';

export const routers = express();
const userController = Container.get(UserController);
const isAuthenticatedMiddleware = Container.get(IsAuthenticatedMiddleware);

routers.post('/sign-up', userController.signUp.bind(userController));
routers.post('/login', userController.login.bind(userController));
routers.use('/users', userRouter);
routers.use('/categories', isAuthenticatedMiddleware.execute(), categoryRouter);
routers.use('/topics', topicRouter);
routers.use('/contents', contentRouter);
