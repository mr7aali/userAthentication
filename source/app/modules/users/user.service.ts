import { IUser } from './user.interface';
import { User } from './user.model';

const create = async (data: IUser): Promise<IUser> => {
    const result = await User.create(data);
    if (!result) {
        throw new Error("Failed to create user!")
    }
    return result;
};

export const userService = {
    create
}