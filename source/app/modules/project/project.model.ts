import { Schema, model } from "mongoose";
import { IProject, IProjectMethods, ProjectModel } from "./project.interface";
import bcrypt from "bcrypt";
import config from "../../../config";
const projectSchema = new Schema<IProject, ProjectModel, IProjectMethods>({
    adminEmail: {
        type: String,
        required: true,
        unique: true
    },
    adminFirstName: {
        type: String,
        required: true,
    },
    adminLastName: {
        type: String,
        required: true,
    },
    adminPassword: {
        type: String,
        required: true,
    },
    projectName: {
        type: String,
        required: true,
    },
    collectionName: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        enum: ["active", "disable", "banned"],
        required: true
    }
}, {
    timestamps: true
});
projectSchema.statics.projectInfo = async function (data: { _id: string }) {
    const result = await this.findById(data._id);
    return result;
}

projectSchema.pre("save", async function (next) {
    this.adminPassword = await bcrypt.hash(this.adminPassword, Number(config.bcryptSaltRounds));
    next();

})

export const Project = model<IProject, ProjectModel>("Project", projectSchema);