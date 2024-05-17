import { SignUpDTO } from '@dtos/users';
import { UserMapper } from '@mappers';
import { Service } from 'typedi';

@Service()
export class UserService {
  constructor(private readonly userMapper: UserMapper) {}

  async signUp(userDTO: SignUpDTO) {
    const userMapped = this.userMapper.signUp(userDTO);
    const userSaved = await userMapped.save();
    return userSaved;
  }

  hello() {
    return 'Hello from user service';
  }

  async login() {
    return 'login';
  }
}
