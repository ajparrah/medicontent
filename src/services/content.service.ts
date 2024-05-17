import { Service } from 'typedi';

@Service()
export class ContentService {
  async getAll() {
    return 'Content from service';
  }

  async create() {
    return 'Content created';
  }

  async getById(id: string) {
    return `Content with id ${id}`;
  }

  async getByTopic(topic: string) {
    return `Content with topic ${topic}`;
  }
}
