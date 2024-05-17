import { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

export const CategorySchema = new Schema({
  title: {
    unique: true,
    type: String,
    required: [true, 'El title es obligatorio'],
  },
  description: {
    type: String,
    required: [true, 'La description es obligatoria'],
  },
  icon: {
    type: String,
    required: [true, 'El icon es obligatorio'],
  },
});

CategorySchema.plugin(uniqueValidator, {
  message: '{PATH} debe ser un valor unico',
});
