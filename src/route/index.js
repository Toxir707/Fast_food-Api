import { Router } from "express";
import categoryRouter from "./route.category.js";
import productRouter from "./product.route.js";


const route = Router()

route.use("/categories", categoryRouter)
route.use("/products", productRouter)

export default route;