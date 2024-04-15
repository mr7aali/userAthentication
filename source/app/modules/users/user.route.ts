import express from "express";
import { userController } from "./user.controller";


const router = express.Router();

router.post("/create", userController.create);
router.get("/get",userController.getAll);
router.get("/get/:id",userController.getSingle);

export const userRoutes = router;