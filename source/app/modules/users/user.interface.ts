import { Model } from "mongoose";

export interface IUser{
    // id:string;
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    role:string;
}
interface IUserMethods {
    fullName(): string;
  }
  
export type UserModel = Model<IUser, {}, IUserMethods>;
// export type UserModel = Model<IUser, Record<string, unknown>>;