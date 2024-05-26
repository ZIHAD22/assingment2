import { ProductModal } from "../Product/product.model";
import { OrderT } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderServices = async (orderData: OrderT) => {
  const result = await OrderModel.create(orderData);
  //   const result = orderData;
  return result;
};
const findProductPriceQuantityService = async (_id: string) => {
  const result = ProductModal.findById(_id, { price: 1, inventory: 1 });
  return result;
};

const updateInstockService = async (_id: string) => {
  const result = ProductModal.findByIdAndUpdate(
    { _id },
    {
      $set: {
        "inventory.inStock": false,
      },
    }
  );

  return result;
};

export {
  createOrderServices,
  findProductPriceQuantityService,
  updateInstockService,
};
