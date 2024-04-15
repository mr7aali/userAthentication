import { Response, Request, NextFunction, ErrorRequestHandler } from "express";
import config from "../../../config";
import { IGenericErrorMessage } from "../../../interfaces/error";
import handleValidationError from "../../errors/handleValidationError";
import CustomError from "../../errors/CustomError";
import handleMongoServerError from "../../errors/handleMongoServerError";
import handleCastError from "../../errors/handleCastError";



const globalErrorHandler: ErrorRequestHandler = (
    error,
    req: Request,
    res: Response,
    next: NextFunction
) => {

    let statusCode = 500;
    let message = "Something went wrong!";
    let errorMessages: IGenericErrorMessage[] = [];

    if (error.name === "ValidationError") {
        const result = handleValidationError(error);
        message = result.message;
        errorMessages = result.errorMessages;
        statusCode = result.statusCode;
    }
    else if (error.name === "MongoServerError") {
        const result = handleMongoServerError(error);
        message = result.message,
            errorMessages = result.errorMessages;
        statusCode = result.statusCode;
    }
    else if (error instanceof CustomError) {
        statusCode = error.statusCode;
        message = error.message;
        errorMessages = error?.message ? [{
            path: error.name,
            message: error.message
        }] : [];
    }
    else if (error.name === "CastError") {
        const result = handleCastError(error);
        message = result.message;
        errorMessages = result.errorMessages;
        statusCode = result.statusCode;
    }
    else if (error instanceof Error) {

        message = error.message;
        errorMessages = error?.message ? [{
            path: error.name,
            message: error.message
        }] : [];
    }


    res.status(statusCode).json({
        success: false,
        message,
        errorMessages,
        stack: config.env === "production" ? undefined : error.stack,
        // err: error
    })
}

export default globalErrorHandler;