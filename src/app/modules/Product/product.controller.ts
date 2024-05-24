import { Request, Response } from "express";
import {
  createProductServices,
  getAllProductServices,
} from "./product.service";
import { sendRes } from "../../../util/sendRes/sendRes";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    const result = await createProductServices(productData);

    sendRes({
      res,
      data: result,
      messages: "Product created successfully",
      status: 200,
    });
  } catch (e) {
    sendRes({
      res,
      messages: "something went wrong",
      status: 500,
      error: e,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await getAllProductServices();

    sendRes({
      res,
      data: result,
      messages: "all ok",
      status: 200,
    });
  } catch (e) {
    sendRes({
      res,
      messages: "something went wrong",
      status: 500,
      error: e,
    });
  }
};

export { createProduct, getAllProducts };
