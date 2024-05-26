import { Router } from "express";
import { createOrder, getAllOrder } from "./order.controller";

const orderRoute = Router();

orderRoute.get("/", getAllOrder);
orderRoute.post("/", createOrder);

export { orderRoute };
