import { Request, Response } from "express";
import {
  createProductServices,
  deleteProductServices,
  getAllProductServices,
  getProductByIdServices,
  searchByTagServices,
  updateQuantityServices,
} from "./product.service";
import { sendRes } from "../../../util/sendRes/sendRes";
import { ProductValidationSchema } from "./product.validation";

const createProductController = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const validatedProductData = ProductValidationSchema.parse(productData);
    const result = await createProductServices(validatedProductData);

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
    const { searchTerm } = req.query;
    if (searchTerm) {
      searchProduct(req, res);
    } else {
      getAllProduct(req, res);
    }
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

// this function search in tags and return all match data this is a helper function of getAllProductsController
const searchProduct = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    if (typeof searchTerm === "string") {
      const result = await searchByTagServices(searchTerm);
      sendRes({
        res,
        data: result,
        messages: `Products matching search term '${searchTerm}' fetched successfully!`,
        status: 200,
      });
    }
  } catch (error) {
    sendRes({
      res,
      error,
      messages: "something Went Wrong",
      status: 500,
    });
  }
};

// this function return all data and this is a helper function of getAllProductsController
const getAllProduct = async (req: Request, res: Response) => {
  const result = await getAllProductServices();

  sendRes({
    res,
    data: result,
    messages: "all ok",
    status: 200,
  });
};

export {
  createProductController,
  getAllProductsController,
  getProductByIdController,
  updateOneQuantityController,
  deleteProductController,
};
