import { Router } from "express";
import categoryController from "../controller/category.controller.js";
const categoryRouter = Router()

categoryRouter
    .get('/', categoryController.getAllCategories)
    .post("/", categoryController.createCategory)
    .get("/:id", categoryController.getOneCategory)
    .put("/:id", categoryController.updateCategory)
    .delete("/:id", categoryController.deleteCategory)

export default categoryRouter;