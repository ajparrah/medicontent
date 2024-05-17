import mongoose from 'mongoose';
import { UserSchema } from './user.schema';
import { TopicSchema } from './topic.schema';
import { CategorySchema } from './category.schema';
import { ContentSchema } from './content.schema';

export const User = mongoose.model('user', UserSchema);
export const Topic = mongoose.model('topic', TopicSchema);
export const Category = mongoose.model('category', CategorySchema);
export const Content = mongoose.model('content', ContentSchema);
