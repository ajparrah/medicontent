export class UserWasNotFound implements Error {
  name: string;
  message: string;
  stack?: string;
  constructor() {
    this.name = 'USER_WAS_NOT_FOUND';
    this.message = `User was not found. Make sure you have set the right username or email`;
  }
}
