import { Request, Response, Router } from "express";
import { createOrder } from "./order.controller";

const orderRoute = Router();

orderRoute.get("/", (req: Request, res: Response) => {
  res.json({
    order: "ok",
  });
});
orderRoute.post("/", createOrder);

export { orderRoute };
