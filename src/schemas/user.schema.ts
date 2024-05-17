import { USER_TYPE } from '@enums';
import { Schema, SchemaType } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

export const UserSchema = new Schema({
  username: {
    unique: true,
    type: String,
    required: [true, 'El username es obligatorio'],
  },
  email: {
    unique: true,
    type: String,
    required: [true, 'El email es obligatorio'],
  },
  type: {
    type: String,
    enum: {
      values: Object.values(USER_TYPE),
      message: '{VALUE} no es un tipo de usuario valido',
    },
  },
  password: {
    type: String,
    required: [true, 'El password es obligatorio'],
  },
});

UserSchema.methods.toJSON = function () {
  const { password, __v, ...userWithoutPassword } = this.toObject();
  return userWithoutPassword;
};

UserSchema.plugin(uniqueValidator, {
  message: '{PATH} debe ser un valor unico',
});
