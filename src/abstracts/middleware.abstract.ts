import { NextFunction, Request, Response } from 'express';
export interface Middleware {
  execute(
    ...args: unknown[]
  ): (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
