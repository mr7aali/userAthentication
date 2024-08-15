import express from "express";
// import { settleAccountController } from "../settleAccount/settleAccount.controller";
import { foodCategoryController } from "./foodCategory.controller";
const router = express.Router();
router.post("/create", foodCategoryController.create);
router.get("/get-all", foodCategoryController.getAll);

export const foodCategoryRouter = router;