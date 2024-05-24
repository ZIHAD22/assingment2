import { Router } from "express";
import {
  createProductController,
  getAllProductsController,
  getProductByIdController,
  updateOneQuantityController,
  deleteProductController,
} from "./product.controller";

const productRoute = Router();

productRoute.post("/", createProductController);
productRoute.get("/", getAllProductsController);
productRoute.get("/:id", getProductByIdController);
productRoute.put("/:id", updateOneQuantityController);
productRoute.delete("/:id", deleteProductController);

export { productRoute };
