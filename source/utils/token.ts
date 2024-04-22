import crypto from 'crypto';
import config from '../config';
import CustomError from '../app/errors/CustomError';
import { IProjectTokenPayload } from '../interfaces/token';



export const tokenEncode = (payload: IProjectTokenPayload) => {
    // Encode the payload as JSON
    const jsonPayload = JSON.stringify(payload);

    // Base64url encode the JSON payload
    const encodedPayload = Buffer.from(jsonPayload).toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');

    // Create a signature using HMAC-SHA256
    const signature = crypto.createHmac('sha256', config.secretKey as string)
        .update(encodedPayload)
        .digest('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
    console.log(signature);
    // Concatenate the encoded payload and encoded signature with a dot
    const jwt = encodedPayload + '.' + signature;

    return jwt;
}

export const tokenDecode = (jwt: string)=> {
    // Split the JWT into encoded payload and encoded signature
    const [encodedPayload, encodedSignature] = jwt.split('.');

    // Decode the payload and signature
    const payload = Buffer.from(encodedPayload.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString();
    const signature = Buffer.from(encodedSignature.replace(/-/g, '+').replace(/_/g, '/'), 'base64');

    // Verify the signature
    const expectedSignature = crypto.createHmac('sha256', config.secretKey as string)
        .update(encodedPayload)
        .digest();

    if (!crypto.timingSafeEqual(signature, expectedSignature)) {
        throw new CustomError(404, 'Invalid signature');
    }

    // Parse the payload as JSON
    const decodedPayload = JSON.parse(payload);
    return decodedPayload;
}


