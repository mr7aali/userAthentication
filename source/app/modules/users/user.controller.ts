
import { Request, Response } from "express";
import { userService } from "./user.service";

const create = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const result = await userService.create(data);
        res.status(200).json({
            success: true,
            message: "user created successfully!",
            data: result
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Failed to create user!"
        })
    }
};

export const userController = {
    create
}