import { ObjectId } from 'mongodb';
import CustomError from '../../errors/CustomError';
import { IUser } from './user.interface';
import { User } from './user.model';

const create = async (data: IUser): Promise<IUser> => {
    const result = await User.create(data);
    const r = await User.fullName()
    if (!result) {
        throw new Error("Failed to create user!")
        // throw new CustomError(200, "Failed to create user");
    }
    return result;
};
const getAll = async ():Promise<IUser[]> => {
    const result = await User.find({});
    if(result.length < 1){
        throw new CustomError(404, "Users not found!");
    }
    return result;
}
const getSingle = async (id:string):Promise<IUser | null> => {
    // const result = await User.find({});
    const result = await User.findById(id);
    if(!result){
        throw new CustomError(404, "Users not found!");
    }
    return result;
}
export const userService = {
    create, getAll,getSingle
}