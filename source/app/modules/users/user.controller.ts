import { IUser } from './user.interface';
import { Request, Response } from "express";
import { userService } from "./user.service";
import sendResponse from "../../../shared/sendResponse";
import CatchAsync from "../../../shared/CatchAsync";

const create = CatchAsync(

    async (req: Request, res: Response) => {

        const data = req.body;
        const result = await userService.create(data);
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "user created successfully!",
            data: result
        })
    }
)

const getAll = CatchAsync(
    async (req: Request, res: Response) => {
        const result = await userService.getAll();

        sendResponse<IUser[]>(res, {
            statusCode: 200,
            success: true,
            message: "All users retrieved successfully!",
            data: result
        })
    }
);
const getSingle = CatchAsync(
    async (req: Request, res: Response) => {
        const id = req.params.id;
        const result = await userService.getSingle(id);
        sendResponse<IUser | null>(res, {
            statusCode: 200,
            success: true,
            message: "User retrieved successfully!",
            data: result
        })
    }
);


export const userController = {
    create, getAll, getSingle
}