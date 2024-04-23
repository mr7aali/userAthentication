import express from "express";
import { projectController } from "./project.controller";

const router = express.Router();

router.post("/create", projectController.create);
router.patch("/update/:id",projectController.update);
router.get("/get",projectController.getAll);
router.get("/get/:id",projectController.getSingle);
router.post("/create-project-token/:id",projectController.createProjectToken);
router.delete("/delete/:id",projectController.deleteSingle)

export const projectRouer = router;