import CustomError from "../../errors/CustomError";
import { IProject } from "./project.interface"
import { Project } from "./project.model"

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

export const projectService = {
    create, update, getAll, getSingle
}