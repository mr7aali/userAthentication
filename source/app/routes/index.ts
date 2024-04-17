import express from "express";
import { userRoutes } from "../modules/users/user.route";
import { projectRouer } from '../modules/project/project.router';
const router = express.Router();

const moduleRoutes = [
    {
        path: '/user',
        route: userRoutes
    },
    {
        path: "/project",
        route: projectRouer
    }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;