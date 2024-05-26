import express, { Request, Response } from "express";
import cors from "cors";
import { productRoute } from "./app/modules/Product/product.route";
import { orderRoute } from "./app/modules/Order/order.route";
const app = express();

// parser
app.use(express.json());
app.use(cors());

// route
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "server is running",
  });
});

app.get("*", (req: Request, res: Response) => {
  res.json({
    success: false,
    message: "route not found ",
    data: {},
  });
});

export default app;
