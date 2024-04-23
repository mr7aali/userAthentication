import CatchAsync from "../../../shared/CatchAsync";
import sendResponse from "../../../shared/sendResponse";
import { IProject } from "./project.interface";
import { projectService } from "./project.service";

const create = CatchAsync(
    async (req, res) => {
        const data = req.body;
        const result = await projectService.create(data);
        sendResponse<IProject>(res, {
            success: true,
            statusCode: 200,
            message: "Project created successsfully!",
            data: result
        })
    }
);
const update = CatchAsync(
    async (req, res) => {
        const data = req.body;
        const id = req.params.id;
        const result = await projectService.update(id, data);
        sendResponse<IProject>(res, {
            success: true,
            statusCode: 200,
            message: "Project's data updated successsfully!",
            data: result
        })
    }
);
const getAll = CatchAsync(
    async (req, res) => {
        const result = await projectService.getAll();
        sendResponse<IProject[]>(res, {
            success: true,
            statusCode: 200,
            message: "Project's data retrieved successsfully!",
            data: result
        })
    }
);
const getSingle = CatchAsync(
    async (req, res) => {
        const id = req.params.id;
        const result = await projectService.getSingle(id);
        sendResponse<IProject>(res, {
            success: true,
            statusCode: 200,
            message: "Project's data retrieved successsfully!",
            data: result
        })
    }
);
const createProjectToken = CatchAsync(
    async (req, res) => {
        const id = req.params.id;
        const result = await projectService.createProjectToken(id);
        sendResponse<{ token: string }>(res, {
            success: true,
            statusCode: 200,
            message: "Project's Token retrieved successsfully!",
            data: result
        })
    }
);
const deleteSingle = CatchAsync(
    async (req, res) => {
        const id = req.params.id;
        const result = await projectService.deleteSingle(id);
        sendResponse<any>(res, {
            success: true,
            statusCode: 200,
            message: "The project has been deleted!",
            data: result
        })
    }
);

export const projectController = {
    create, update, getAll, getSingle, createProjectToken, deleteSingle

}