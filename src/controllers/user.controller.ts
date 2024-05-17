import { Service } from 'typedi';
import { Request, Response } from 'express';
import { UserService } from '@services/user.service';

@Service()
export class UserController {
  constructor(private readonly userService: UserService) {}

  async signUp(req: Request, res: Response) {
    try {
      const userSaved = await this.userService.signUp(req.body);
      res.status(201).send(userSaved);
    } catch (error) {
      if (error.errors) {
        return res
          .status(400)
          .send({ message: error._message, errors: error.errors });
      }
      res.status(500).send({ message: error.message });
    }
  }

  async getAllUsers(req: Request, res: Response) {
    res.send(this.userService.hello());
  }

  async login(req: Request, res: Response) {
    res.send(await this.userService.login());
  }
}
