import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { hashPassword } from '../../utils/password.helper';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

// 👇 Hash password before saving to DB
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await hashPassword(this.password);
  next();
});

UserSchema.set('toJSON', {
  transform: (_doc, ret: Record<string, any>) => {
    delete ret.password;
    delete ret.__v;
    return ret;
  },
});