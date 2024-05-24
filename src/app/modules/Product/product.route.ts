import { Router } from "express";
import { createProduct } from "./product.controller";

const productRoute = Router();

productRoute.get("/", createProduct);

export { productRoute };
