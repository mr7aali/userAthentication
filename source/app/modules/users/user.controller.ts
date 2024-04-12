
import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";
import CatchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";

// const create = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const data = req.body;
//         const result = await userService.create(data);
//         res.status(200).json({
//             success: true,
//             message: "user created successfully!",
//             data: result
//         })
//     } catch (err) {
//         next(err);
//     }
// };
const create = CatchAsync(

    async (req: Request, res: Response) => {

        const data = req.body;
        const result = await userService.create(data);
        // res.status(200).json({
        //     success: true,
        //     message: "user created successfully!",
        //     data: result
        // })
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "user created successfully!",
            data: result
        })
    }


)



export const userController = {
    create
}