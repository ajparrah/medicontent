import { Service } from 'typedi';

@Service()
export class UserService {
  hello() {
    return 'Hello from user service';
  }

  async login() {
    return 'login';
  }
  async signUp() {
    return 'signUp';
  }
}
