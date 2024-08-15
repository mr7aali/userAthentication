import CustomError from "../../errors/CustomError";
import { IFoodCategory } from "./foodCategory.interface";
import { FoodCategory } from "./foodCategory.model";
// import { ISettleAccount } from "./settleAccount.interface";
// import { SettleAccount } from "./settleAccount.model";


const create = async (data: IFoodCategory): Promise<IFoodCategory> => {
    const result = await FoodCategory.create(data);
    return result;
}
const getAll = async (data: IFoodCategory): Promise<IFoodCategory[]> => {
    const result = await FoodCategory.find({})
    return result;
}
export const foodCategoryService = {
    create, getAll
}