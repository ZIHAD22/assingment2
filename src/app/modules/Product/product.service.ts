import { ProductT } from "./product.interface";
import { ProductModal } from "./product.model";

const createProductServices = async (product: ProductT) => {
  const result = await ProductModal.create(product);

  return result;
};

const getAllProductServices = async () => {
  const result = await ProductModal.find();
  return result;
};

export { createProductServices, getAllProductServices };
