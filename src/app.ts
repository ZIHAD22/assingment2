import express, { Request, Response } from "express";
import { productRoute } from "./app/modules/Product/product.route";
const app = express();

app.use("/api/products", productRoute);

app.get("*", (req: Request, res: Response) => {
  res.json({
    success: false,
    message: "route not found ",
    data: {},
  });
});

export default app;
