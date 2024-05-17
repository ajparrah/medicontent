import express from 'express';
import Container from 'typedi';
import { UserController } from '@controllers';
import { categoryRouter } from './category.router';
import { topicRouter } from './topic.router';
import { contentRouter } from './content.router';
import { userRouter } from './user.router';

export const routers = express();
const userController = Container.get(UserController);

routers.post('/sign-up', userController.signUp.bind(userController));
routers.post('/login', userController.login.bind(userController));
routers.use('/users', userRouter);
routers.use('/categories', categoryRouter);
routers.use('/topics', topicRouter);
routers.use('/contents', contentRouter);
