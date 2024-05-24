import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
} from "./product.controller";

const productRoute = Router();

productRoute.post("/", createProduct);
productRoute.get("/", getAllProducts);
productRoute.get("/:id", getProductById);

export { productRoute };
