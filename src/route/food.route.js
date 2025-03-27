import { Router } from "express";
import foodController from "../controller/food.controller.js"

const productRouter = Router()

productRouter
    .get("/", foodController.getAllFoods)
    .post("/", foodController.createFood)

export default productRouter;