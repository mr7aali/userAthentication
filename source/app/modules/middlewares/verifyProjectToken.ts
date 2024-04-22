import { NextFunction, Request, Response } from "express";
import CustomError from "../../errors/CustomError";
import { tokenDecode } from "../../../utils/token";
import { IProjectTokenPayload } from "../../../interfaces/token";

const verifyProjectToken = () =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = req.headers.authorization;
            if (!token) {
                throw new CustomError(401, "Unauthorized request!");
            }
            //verifyToken
            const verifyData = tokenDecode(token) as IProjectTokenPayload;
            req.projectDetails = verifyData;
            next();
        }
        catch (error) {
            next(error);
        }
    }

export default verifyProjectToken;