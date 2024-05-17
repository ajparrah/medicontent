import { USER_TYPE } from '@enums';

// TODO: convert to class and use class validator
export interface SignUpDTO {
  username: string;
  email: string;
  type: USER_TYPE;
}
