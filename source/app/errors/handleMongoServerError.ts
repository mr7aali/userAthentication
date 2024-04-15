import { IGenericErrorMessage } from './../../interfaces/error';
import { MongoServerError } from 'mongodb';
import { IGenericErrorResponse } from '../../interfaces/error';

const handleMongoServerError = (error: MongoServerError): IGenericErrorResponse => {

    const key = Object.keys(error.errorResponse.keyValue)[0];
    const errorMessages: IGenericErrorMessage[] = [
        {
            path: key,
            message: error.keyValue
        }
    ]
    return {
        statusCode: 400,
        message: `${key} alreday exists!`,
        errorMessages
    }
}

export default handleMongoServerError;