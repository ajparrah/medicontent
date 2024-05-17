import { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

export const TopicSchema = new Schema({
  title: {
    unique: true,
    type: String,
    required: [true, 'El title es obligatorio'],
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'category',
    required: true,
  },
  allowVideo: {
    type: Boolean,
    default: false,
  },
  allowImage: {
    type: Boolean,
    default: false,
  },
  allowText: {
    type: Boolean,
    default: false,
  },
});

TopicSchema.plugin(uniqueValidator, {
  message: '{PATH} debe ser un valor unico',
});
