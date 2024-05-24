import { Request, Response } from "express";

const createProduct = async (req: Request, res: Response) => {
  res.json({
    product: "Found",
  });
};

export { createProduct };
