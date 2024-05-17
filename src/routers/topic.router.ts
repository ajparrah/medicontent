import express from 'express';
import Container from 'typedi';
import { TopicController } from '@controllers';

export const topicRouter = express.Router();
const topicController = Container.get(TopicController);

topicRouter.get('/', topicController.get.bind(topicController));
topicRouter.get(
  '/:title/contents',
  topicController.getContentsByTopic.bind(topicController),
);
topicRouter.post('/', topicController.create.bind(topicController));
