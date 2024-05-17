import { Service } from 'typedi';

@Service()
export class TopicService {
  async get() {
    return 'Topic from service';
  }

  async create() {
    return 'Topic created';
  }
}
