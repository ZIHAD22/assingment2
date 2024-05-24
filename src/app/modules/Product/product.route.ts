import { Router } from "express";
import { createProduct, getAllProducts } from "./product.controller";

const productRoute = Router();

productRoute.post("/", createProduct);
productRoute.get("/", getAllProducts);

export { productRoute };
