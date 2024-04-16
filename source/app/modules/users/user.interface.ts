import { HydratedDocument, Model } from "mongoose";

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: 'admin' | 'superAdmin' | 'user'
}



//instance methods
export interface IUserMethods {
  fullName(): string;
}

//static
export interface UserModel extends Model<IUser, Record<string, unknown>, IUserMethods> {
  createWithFullName(name: string): Promise<HydratedDocument<IUser, IUserMethods>>;
  fullName(): string;
}

// export type UserModel = Model<IUser, Record<string, unknown>, IUserMethods>;
// export type UserModel = Model<IUser, Record<string, unknown>>;