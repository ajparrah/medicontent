import { SignUpDTO } from '@dtos/users';
import { User } from '@schemas';
import { Service } from 'typedi';

@Service()
export class UserMapper {
  signUp(signUpDTO: SignUpDTO) {
    const user = new User();
    user.username = signUpDTO.username;
    user.email = signUpDTO.email;
    user.type = signUpDTO.type;

    return user;
  }
}
