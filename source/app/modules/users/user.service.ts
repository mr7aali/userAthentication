import { paginationHelpers } from '../../../helpers/paginationHelpers';
import { IPaginationOptons } from '../../../interfaces/pagination';
import { IGenericMetaResponse } from '../../../interfaces/responseType';
import CustomError from '../../errors/CustomError';
import { IUser } from './user.interface';
import { User } from './user.model';


const create = async (data: IUser): Promise<IUser> => {
    const result = await User.create(data);

    if (!result) {
        throw new Error("Failed to create user!")
    }
    return result;
};

const getAll = async ( IPaginationOptons: IPaginationOptons): Promise<IGenericMetaResponse<IUser[]>> => {
    const { page, limit, skip, sortBy, sortOrder } =
        paginationHelpers.calculatePagination(IPaginationOptons);
    const result = await User.find({}).sort().skip(skip).limit(limit);
    if (result.length < 1) {
        throw new CustomError(404, "Users not found!");
    }

    const total = await User.countDocuments();

    return {
        meta: {
            page, limit, total,
        },
        data: result
    };
}
const getSingle = async (id: string): Promise<IUser | null> => {
    const result = await User.findById(id);
    if (!result) {
        throw new CustomError(404, "Users not found!");
    }
    return result;
}
const update = async (id: string, data: Partial<IUser>): Promise<IUser> => {
    const result = await User.findByIdAndUpdate(id, data, { new: true });
    if (!result) {
        throw new CustomError(404, "Users not found!");
    }
    return result;
}

export const userService = {
    create, getAll, getSingle, update
}