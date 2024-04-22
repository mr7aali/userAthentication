import { IUser } from './user.interface';
import { Request, Response } from "express";
import { userService } from "./user.service";
import sendResponse from "../../../shared/sendResponse";
import CatchAsync from "../../../shared/CatchAsync";
import { IProjectTokenPayload } from '../../../interfaces/token';

const create = CatchAsync(

    async (req: Request, res: Response) => {
        const data = req.body;
        const projectDetails: IProjectTokenPayload = req.projectDetails;
        const result = await userService.create(data, projectDetails);
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: `user created successfully to ${projectDetails.collectionName}!`,
            data: result
        })
    }
)

const getAll = CatchAsync(
    async (req: Request, res: Response) => {
        const projectDetails: IProjectTokenPayload = req.projectDetails;
        const result = await userService.getAll(projectDetails);

        sendResponse<IUser[]>(res, {
            statusCode: 200,
            success: true,
            message: `All users retrieved successfully from ${projectDetails.collectionName}!`,
            data: result
        })
    }
);
const getSingle = CatchAsync(
    async (req: Request, res: Response) => {
        const id = req.params.id;
        const projectDetails: IProjectTokenPayload = req.projectDetails;
        const result = await userService.getSingle(id, projectDetails);
        sendResponse<IUser | null>(res, {
            statusCode: 200,
            success: true,
            message: `User retrieved successfully from ${projectDetails.collectionName}!`,
            data: result
        })
    }
);

const update = CatchAsync(
    async (req: Request, res: Response) => {
        const id = req.params.id;
        const data = req.body;
        const projectDetails: IProjectTokenPayload = req.projectDetails;
        const result = await userService.update(id, data, projectDetails);
        sendResponse<IUser>(res, {
            statusCode: 200,
            success: true,
            message: `User data update successfully to ${projectDetails.collectionName}!`,
            data: result
        })
    }
)
export const userController = {
    create, getAll, getSingle, update

}