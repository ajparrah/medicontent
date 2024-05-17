import { Service } from 'typedi';
import { Request, Response } from 'express';
import { UserService } from '@services/user.service';

@Service()
export class UserController {
  constructor(private readonly userService: UserService) {}

  async getAllUsers(req: Request, res: Response) {
    res.send(this.userService.hello());
  }

  async login(req: Request, res: Response) {
    res.send(await this.userService.login());
  }

  async signUp(req: Request, res: Response) {
    res.send(await this.userService.signUp());
  }
}
