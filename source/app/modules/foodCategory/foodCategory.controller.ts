import CatchAsync from "../../../shared/CatchAsync"
import sendResponse from "../../../shared/sendResponse";
import { IFoodCategory } from "./foodCategory.interface";
import { foodCategoryService } from "./foodCategory.service";


const create = CatchAsync(
    async (req, res) => {
        const data = req.body;
        const result = await foodCategoryService.create(data);
        sendResponse<IFoodCategory>(res, {
            success: true,
            statusCode: 200,
            message: "food category created successsfully!",
            data: result
        })
    }
);
const getAll = CatchAsync(
    async (req, res) => {
        const data = req.body;
        const result = await foodCategoryService.getAll(data);
        sendResponse<IFoodCategory[]>(res, {
            success: true,
            statusCode: 200,
            message: "data retrieved successfully!",
            data: result
        })
    }
);
export const foodCategoryController = {
    create,getAll
}