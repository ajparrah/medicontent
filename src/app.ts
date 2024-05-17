import 'reflect-metadata';
import express from 'express';
import dotEnv from 'dotenv';
import cors from 'cors';
import { routers } from './routers';

const bootstrap = async () => {
  try {
    dotEnv.config();
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use('/api/v1', routers);
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log('Something went wrong trying to start app: ', error);
  }
};
bootstrap();
