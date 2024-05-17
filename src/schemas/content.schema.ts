import { CONTENT_TYPE } from '@enums';
import { Schema } from 'mongoose';

export const ContentSchema = new Schema({
  title: {
    type: String,
    required: [true, 'El title es obligatorio'],
  },
  description: {
    type: String,
    required: [true, 'La description es obligatoria'],
  },
  type: {
    type: String,
    enum: {
      values: Object.values(CONTENT_TYPE),
      message: '{VALUE} no es un tipo de contenido valido',
    },
    required: [true, 'El type es obligatorio'],
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'category',
    required: true,
  },
  topic: {
    type: Schema.Types.ObjectId,
    ref: 'topic',
    required: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  videoUrl: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: false,
  },
});
