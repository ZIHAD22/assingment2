import { Request, Response } from "express";
import {
  createOrderServices,
  findProductPriceQuantityService,
  getALlOrdersService,
} from "./order.services";
import { OrderT } from "./order.interface";
import { sendRes } from "../../../util/sendRes/sendRes";

import { updateQuantityServices } from "../Product/product.service";
import { OrderValidationSchema } from "./order.validation";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData: OrderT = req.body;
    const validatedOrderData = OrderValidationSchema.parse(orderData);
    const productData = await findProductPriceQuantityService(
      validatedOrderData.productId
    );

    // check for Insufficient quantity
    if (productData?.inventory.quantity) {
      const { email, price, productId, quantity } = validatedOrderData;
      const updatePrice = price * quantity;
      const data = await createOrderServices({
        email,
        productId,
        price: updatePrice,
        quantity,
      });

      const updateQuantity = productData.inventory?.quantity - data.quantity;
      await updateQuantityServices(productId, updateQuantity);

      sendRes({
        res,
        data,
        messages: "Order created successfully!",
        status: 200,
      });
    } else {
      throw new Error("Insufficient quantity available in inventory");
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

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;

    const data = await getALlOrdersService(email as string);
    if (data.length === 0) {
      throw new Error("Order not found");
    }
    sendRes({
      res,
      data,
      messages: `Orders fetched successfully${email ? " For user email" : "!"}`,
      status: 200,
    });
  } catch (error: any) {
    sendRes({
      res,
      error,
      messages: error.message ? error.message : "something Went Wrong",
      status: 500,
    });
  }
};

export { createOrder, getAllOrder };
