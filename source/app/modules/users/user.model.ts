import { Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
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
        //! unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

userSchema.statics.fullName = async function () {
    
}
// userSchema.method('fullName', function fullName(): string {
//     return this.firstName + ' ' + this.lastName;
// });


// const User = model<IUser>('User', userSchema);
export const User = model<IUser, UserModel>('User', userSchema);