import { Request, Response } from "express";
import {
  createOrderServices,
  findProductPriceQuantityService,
} from "./order.services";
import { OrderT } from "./order.interface";
import { sendRes } from "../../../util/sendRes/sendRes";

import { updateQuantityServices } from "../Product/product.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const { email, price, productId, quantity }: OrderT = req.body;
    const updatePrice = price * quantity;

    const productData = await findProductPriceQuantityService(productId);

    // check for Insufficient quantity
    if (productData?.inventory.quantity) {
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
      sendRes({
        res,
        data: null,
        messages: "Insufficient quantity available in inventory",
        status: 500,
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

export { createOrder };
