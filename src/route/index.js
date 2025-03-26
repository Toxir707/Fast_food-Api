import { Router } from "express";
import categoryRouter from "./route.category.js";


const route = Router()

route.use("/categories", categoryRouter)

export default route;