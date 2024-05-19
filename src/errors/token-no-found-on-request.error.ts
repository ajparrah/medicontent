export class TokenNotFoundOnRequest implements Error {
  name: string;
  message: string;
  stack?: string;
  constructor() {
    this.name = 'TOKEN_NOT_FOUND_ON_REQUEST';
    this.message = `The token was not found on request. Make sure you set the token on the request headers`;
  }
}
