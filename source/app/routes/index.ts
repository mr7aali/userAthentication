import express from "express";
import { userRoutes } from "../modules/users/user.route";
// import { projectRouer } from '../modules/project/project.router';
// import { settleAccountRouer } from "../modules/settleAccount/settleAccount.router";
// import { transectionRouer } from "../modules/transection/transection.roouter";
import { foodCategoryRouter } from "../modules/foodCategory/foodCategory.router";
const router = express.Router();

const moduleRoutes = [
    {
        path: '/user',
        route: userRoutes
    },
    // {
    //     path: "/project",
    //     route: projectRouer
    // },
    // {
    //     path: "/account",
    //     route: settleAccountRouer
    // },
    // {
    //     path: "/transection",
    //     route: transectionRouer
    // },
    {
        path: "/food-categories",
        route: foodCategoryRouter

    }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;