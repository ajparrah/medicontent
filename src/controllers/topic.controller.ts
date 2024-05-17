import { Service } from 'typedi';
import { Request, Response } from 'express';
import { TopicService, ContentService } from '@services';

@Service()
export class TopicController {
  constructor(
    private readonly topicService: TopicService,
    private readonly contentSerice: ContentService,
  ) {}

  async get(req: Request, res: Response) {
    res.send(await this.topicService.get());
  }

  async create(req: Request, res: Response) {
    res.send(await this.topicService.create());
  }

  async getContentsByTopic(req: Request, res: Response) {
    const response = this.contentSerice.getByTopic(req.params.title);
    res.send(response);
  }
}
