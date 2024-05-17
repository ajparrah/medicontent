export class CredentialsForDatabaseNotFound implements Error {
  name: string;
  message: string;
  stack?: string;
  constructor() {
    this.name = 'CREDENTIALS_FOR_DATABASE_NOT_FOUND';
    this.message = `Credentials for database not found. Make sure you have set on environment variables`;
  }
}
