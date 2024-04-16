import { HydratedDocument, Model } from "mongoose";

export interface IProject {
    adminFirstName: string;
    adminLastName: string;
    adminEmail: string;
    adminPassword: string;
    projectName: string;
}

//instance methods
export interface IProjectMethods {
    fullName(): string;
}

//static
export interface ProjectModel extends Model<IProject, Record<string, unknown>, IProjectMethods> {
    createWithFullName(name: string): Promise<HydratedDocument<IProject, IProjectMethods>>;
    fullName(): string;
}