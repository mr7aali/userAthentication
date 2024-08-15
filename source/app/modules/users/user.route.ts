import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/create", userController.create);
router.get("/get", userController.getAll);
router.get("/get/:id", userController.getSingle);
router.post("/update/:id", userController.update);

export const userRoutes = router;