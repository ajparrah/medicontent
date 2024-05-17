import { Service } from 'typedi';
import { Request, Response } from 'express';
import { ContentService } from '@services';

@Service()
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  async get(req: Request, res: Response) {
    const response = await this.contentService.getAll();
    res.send(response);
  }

  async getById(req: Request, res: Response) {
    const response = await this.contentService.getById(req.params.id);
    res.send(response);
  }

  async create(req: Request, res: Response) {
    const response = await this.contentService.create();
    res.send(response);
  }
}
