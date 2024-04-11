
import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";

const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        const result = await userService.create(data);
        res.status(200).json({
            success: true,
            message: "user created successfully!",
            data: result
        })
    } catch (err) {
        next(err);
    }
};

export const userController = {
    create
}