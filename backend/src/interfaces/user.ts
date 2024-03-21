import mongoose, { Document, Schema, Model } from 'mongoose';
import express, { Request, Response } from 'express';

enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

interface User extends Document {
  username: string;
  email: string;
  password: string;
  role: UserRole;
}

const userSchema = new Schema<User>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: Object.values(UserRole), default: UserRole.USER } 
});

const UserModel: Model<User> = mongoose.model<User>('User', userSchema);



export { User, UserModel, UserRole };

  