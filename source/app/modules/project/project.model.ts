import { Schema, model } from "mongoose";
import { IProject, IProjectMethods, ProjectModel } from "./project.interface";

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
    collectionName:{
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

export const Project = model<IProject, ProjectModel>("Project", projectSchema);