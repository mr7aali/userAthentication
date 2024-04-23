import mongoose from "mongoose";
import { tokenEncode } from "../../../utils/token";
import CustomError from "../../errors/CustomError";
import { IProject } from "./project.interface"
import { Project } from "./project.model"
import { Collection } from 'mongoose';
import { UserModel } from "../users/user.model";

const create = async (data: IProject): Promise<IProject> => {
    const result = await Project.create(data);
    if (!result) {
        throw new CustomError(404, "Failed to create!");
    }
    return result;
}
const update = async (id: string, data: Partial<IProject>): Promise<IProject> => {
    const result = await Project.findByIdAndUpdate(id, data, { new: true });
    if (!result) {
        throw new CustomError(404, "Project not found!");
    }
    return result;
}
const getAll = async (): Promise<IProject[]> => {
    const result = await Project.find({});
    if (result.length < 1) {
        throw new CustomError(404, "Projects not found!");
    }
    return result;
}
const getSingle = async (id: string): Promise<IProject> => {
    const result = await Project.findById(id);
    if (!result) {
        throw new CustomError(404, "Project not found!");
    }
    return result;
}
const createProjectToken = async (id: string): Promise<{ token: string }> => {
    const project = await Project.findById(id);
    if (!project) {
        throw new CustomError(404, "Project not found!");
    }
    const tokenData = {
        _id: project._id as unknown as string,
        adminEmail: project.adminEmail,
        collectionName: project.collectionName
    }
    const result = tokenEncode(tokenData);
    return {
        token: result
    }
}
const deleteSingle = async (id: string): Promise<any> => {
    const project = await Project.findById(id);
    if (!project) {
        throw new CustomError(404, "Project not found!");
    }
    const isDelete = await mongoose.connection.dropCollection(project.collectionName);
    console.log(isDelete);

    return project;

}

export const projectService = {
    create, update, getAll, getSingle, createProjectToken, deleteSingle
}