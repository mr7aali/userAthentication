import { Response } from "express";
type IResponseData<T> = {
    statusCode: number;
    success: boolean;
    message: string;
    meta?: {
        page: number;
        limit: number;
        total: number;
    },
    data?: T
}
const sendResponse = <T>(res: Response, data: IResponseData<T>) => {
    res.status(data.statusCode).json(data)
}

export default sendResponse;