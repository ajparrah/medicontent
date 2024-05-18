import { Service } from 'typedi';
import { Request, Response } from 'express';
import { UserService } from '@services/user.service';
import { UserWasNotFound } from '@errors';

@Service()
export class UserController {
  constructor(private readonly userService: UserService) {}

  async signUp(req: Request, res: Response) {
    try {
      const userSaved = await this.userService.signUp(req.body);
      return res.status(201).send(userSaved);
    } catch (error) {
      if (error.errors) {
        return res
          .status(400)
          .send({ message: error._message, errors: error.errors });
      }
      return res.status(500).send({ message: error.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const tokenGenerated = await this.userService.login(req.body);
      const response = { token: tokenGenerated };
      res.status(200).send(response);
    } catch (error) {
      if (error instanceof UserWasNotFound) {
        return res.status(404).send({ message: error.message });
      }
      return res.status(500).send({ message: error.message });
    }
  }

  async getAllUsers(req: Request, res: Response) {
    res.send(this.userService.hello());
  }
}
