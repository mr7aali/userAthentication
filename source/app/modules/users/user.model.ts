import { Schema, model } from "mongoose";
import { IUser, IUserMethods, IUserModel } from "./user.interface";
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import config from "../../../config";
const userSchema = new Schema<IUser, IUserModel, IUserMethods>({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        // unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    projectId: {
        type: String,
        // required: true,
    }
}, {
    timestamps: true
});

userSchema.statics.fullName = async function () {

}
userSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, Number(config.bcryptSaltRounds));
    next();
})
export const UserModel = (collectionName: string): IUserModel => {
    return mongoose.model<IUser, IUserModel>(collectionName, userSchema);
};
// export const User = model<IUser, IUserModel>('User', userSchema, "fuck2");