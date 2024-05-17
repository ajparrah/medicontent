import { Service } from 'typedi';
import { Request, Response } from 'express';
import { CategoryService } from '@services';

@Service()
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  async get(req: Request, res: Response) {
    res.send(await this.categoryService.get());
  }

  async create(req: Request, res: Response) {
    res.send(await this.categoryService.create());
  }
}
