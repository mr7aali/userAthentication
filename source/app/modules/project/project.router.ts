import express from "express";
import { projectController } from "./project.controller";

const router = express.Router();

router.post("/create", projectController.create);
router.patch("/update/:id",projectController.update);
router.get("/get",projectController.getAll);
router.get("/get/:id",projectController.getSingle)

export const projectRouer = router;