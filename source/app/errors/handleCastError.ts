import mongoose from "mongoose";
import { IGenericErrorMessage, IGenericErrorResponse } from "../../interfaces/error";

const handleCastError = (error: mongoose.Error.CastError): IGenericErrorResponse => {
    const errorMessages: IGenericErrorMessage[] = [
        { path: error.path, message: `${error.name}` }
    ]
    return {
        statusCode: 400,
        message: "Invalid Id",
        errorMessages
    }
}

export default handleCastError;