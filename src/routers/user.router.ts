import express from 'express';
import Container from 'typedi';
import { UserController } from '@controllers';

export const userRouter = express.Router();
const userController = Container.get(UserController);

userRouter.get('/', userController.getAllUsers.bind(userController));
