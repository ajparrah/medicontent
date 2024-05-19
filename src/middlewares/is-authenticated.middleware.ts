import { Middleware } from '@abstracts';
import { InvalidTokenNotFoundOnRequest, TokenNotFoundOnRequest } from '@errors';
import { Request, Response, NextFunction } from 'express';
import { Service } from 'typedi';
import jwt from 'jsonwebtoken';

// ? Validate if route is not public, the token comes on request
@Service()
export class IsAuthenticatedMiddleware implements Middleware {
  execute(): (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void> {
    return async (
      req: Request,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      try {
        const tokenOnRequest =
          req.headers.authorization &&
          req.headers.authorization?.substring('Bearer '.length);
        if (!tokenOnRequest) {
          throw new TokenNotFoundOnRequest();
        }
        const tokenVerified = jwt.verify(
          tokenOnRequest,
          process.env.JWT_TOKEN_SECRET_SEED as string,
        );

        if (!tokenVerified) {
          throw new InvalidTokenNotFoundOnRequest();
        }
        // TODO: Validate this step to handle the user on the request
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        req.user = tokenVerified?.user;
        next();
      } catch (error) {
        if (error instanceof TokenNotFoundOnRequest) {
          res.status(400).send({ error: error.message });
          return;
        }

        if (error instanceof InvalidTokenNotFoundOnRequest) {
          res.status(401).send({ error: error.message });
          return;
        }

        if (error instanceof jwt.TokenExpiredError) {
          const invalidToken = new InvalidTokenNotFoundOnRequest();
          res.status(401).send({ error: invalidToken.message });
          return;
        }
        res.status(401).send({
          error:
            'Somenthing went wrong trying to validate your token. Please try again.',
        });
        return;
      }
    };
  }
}
