export class InvalidTokenNotFoundOnRequest implements Error {
  name: string;
  message: string;
  stack?: string;
  constructor() {
    this.name = 'INVALID_TOKEN_NOT_FOUND_ON_REQUEST';
    this.message = `The token is invalid. Try generate a new token`;
  }
}
