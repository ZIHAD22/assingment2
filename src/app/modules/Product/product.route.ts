import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateOneQuantity,
} from "./product.controller";

const productRoute = Router();

productRoute.post("/", createProduct);
productRoute.get("/", getAllProducts);
productRoute.get("/:id", getProductById);
productRoute.put("/:id", updateOneQuantity);

export { productRoute };
