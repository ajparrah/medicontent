import { LoginDTO, SignUpDTO } from '@dtos/users';
import { UserWasNotFound } from '@errors';
import { UserMapper } from '@mappers';
import { User } from '@schemas';
import { Service } from 'typedi';
import jwt from 'jsonwebtoken';

@Service()
export class UserService {
  constructor(private readonly userMapper: UserMapper) {}

  async signUp(signUpDTO: SignUpDTO) {
    const userMapped = this.userMapper.signUp(signUpDTO);
    const userSaved = await userMapped.save();
    return userSaved;
  }

  hello() {
    return 'Hello from user service';
  }

  async login(loginDTO: LoginDTO) {
    const userFound = await this.getUserByUsernameOrEmail(
      loginDTO.usernameOrEmail,
    );
    if (!userFound) {
      throw new UserWasNotFound();
    }
    const { _id, ...userWithoutId } = userFound;
    const payload = { user: userWithoutId };

    const token = jwt.sign(
      payload,
      process.env.JWT_TOKEN_SECRET_SEED as string,
      {
        expiresIn: process.env.JWT_TOKEN_CAD,
      },
    );
    return token;
  }

  async getUserByUsernameOrEmail(usernameOrEmail: string) {
    const userFound = await User.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    });
    if (!userFound) {
      return null;
    }
    return userFound.toObject({
      versionKey: false,
    });
  }
}
