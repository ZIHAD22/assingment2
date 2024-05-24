import { Request, Response } from "express";
import {
  createProductServices,
  deleteProductServices,
  getAllProductServices,
  getProductByIdServices,
  updateQuantityServices,
} from "./product.service";
import { sendRes } from "../../../util/sendRes/sendRes";

const createProductController = async (req: Request, res: Response) => {
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

const getAllProductsController = async (req: Request, res: Response) => {
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

const getProductByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await getProductByIdServices(id);

    sendRes({
      res,
      data: result,
      messages: "Product fetched successfully!",
      status: 200,
    });
  } catch (error) {
    sendRes({
      res,
      error,
      messages: "something Went Wrong",
      status: 500,
    });
  }
};

const updateOneQuantityController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    console.log(quantity);
    const result = await updateQuantityServices(id, quantity);
    sendRes({
      res,
      data: result,
      messages: "Product updated successfully!",
      status: 200,
    });
  } catch (error) {
    sendRes({
      res,
      error,
      messages: "something Went Wrong",
      status: 500,
    });
  }
};

const deleteProductController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteProductServices(id);
    sendRes({
      res,
      data: null,
      messages: "Product deleted successfully!",
      status: 200,
    });
  } catch (error) {
    sendRes({
      res,
      error,
      messages: "something Went Wrong",
      status: 500,
    });
  }
};

export {
  createProductController,
  getAllProductsController,
  getProductByIdController,
  updateOneQuantityController,
  deleteProductController,
};
