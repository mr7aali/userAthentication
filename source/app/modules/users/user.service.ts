import { paginationHelpers } from '../../../helpers/paginationHelpers';
import { IPaginationOptons } from '../../../interfaces/pagination';
import { IGenericMetaResponse } from '../../../interfaces/responseType';
import { IProjectTokenPayload } from '../../../interfaces/token';
import CustomError from '../../errors/CustomError';
import { Project } from '../project/project.model';
import { IUser } from './user.interface';
import { UserModel } from './user.model';


const create = async (data: IUser, projectDetails: IProjectTokenPayload): Promise<IUser> => {
    const project = await Project.findById(projectDetails._id);
    if (!project) {
        throw new CustomError(404, "Collection not found!")
    }
    data.projectId = projectDetails._id;
    const userModel = UserModel(projectDetails.collectionName);
    const result = await userModel.create(data);
    // const result = await User.create(data);
    if (!result) {
        throw new Error("Failed to create user!")
    }
    return result;
};

const getAll = async (projectDetails: IProjectTokenPayload, IPaginationOptons: IPaginationOptons): Promise<IGenericMetaResponse<IUser[]>> => {
    const { page, limit, skip, sortBy, sortOrder } =
        paginationHelpers.calculatePagination(IPaginationOptons);

    const project = await Project.findById(projectDetails._id);
    if (!project) {
        throw new CustomError(404, "Collection not found!")
    }
    const userModel = UserModel(projectDetails.collectionName);
    const result = await userModel.find({}).sort().skip(skip).limit(limit);
    // const result = await userModel.find({});
    if (result.length < 1) {
        throw new CustomError(404, "Users not found!");
    }

    const total = await userModel.countDocuments();

    return {
        meta: {
            page, limit, total,
        },
        data: result
    };
}
const getSingle = async (id: string, projectDetails: IProjectTokenPayload): Promise<IUser | null> => {
    const project = await Project.findById(projectDetails._id);
    if (!project) {
        throw new CustomError(404, "Collection not found!")
    }
    const userModel = UserModel(projectDetails.collectionName);
    const result = await userModel.findById(id);
    if (!result) {
        throw new CustomError(404, "Users not found!");
    }
    return result;
}
const update = async (id: string, data: Partial<IUser>, projectDetails: IProjectTokenPayload): Promise<IUser> => {
    const project = await Project.findById(projectDetails._id);
    if (!project) {
        throw new CustomError(404, "Collection not found!")
    }

    const userModel = UserModel(projectDetails.collectionName);
    const result = await userModel.findByIdAndUpdate(id, data, { new: true });
    if (!result) {
        throw new CustomError(404, "Users not found!");
    }
    return result;
}

export const userService = {
    create, getAll, getSingle, update
}