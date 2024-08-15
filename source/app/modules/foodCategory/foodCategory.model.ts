import { Schema, model } from "mongoose";
import { FoodCategoryModel, IFoodCategory, IFoodCategoryMethods } from "./foodCategory.interface";
// import { ISettleAccount, ISettleAccountMethods, SettleAccountModel } from "./settleAccount.interface";
const settleAccountSchema = new Schema<IFoodCategory, FoodCategoryModel, IFoodCategoryMethods>({
    name:{
        required:true,
        type:String,
        unique:true
    }
}, {
    timestamps: true
});


export const FoodCategory = model<IFoodCategory, FoodCategoryModel>("FoodCategory", settleAccountSchema);