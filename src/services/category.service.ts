import { Service } from 'typedi';

@Service()
export class CategoryService {
  async get() {
    return 'Category from service';
  }

  async create() {
    return 'Category created';
  }
}
