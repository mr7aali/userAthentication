import express from "express";
import { userController } from "./user.controller";
import verifyProjectToken from "../middlewares/verifyProjectToken";


const router = express.Router();

router.post("/create", verifyProjectToken(), userController.create);
router.get("/get", verifyProjectToken(), userController.getAll);
router.get("/get/:id", verifyProjectToken(), userController.getSingle);
router.post("/update/:id", verifyProjectToken(), userController.update);

export const userRoutes = router;