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

const getProductByIdServices = async (id: string) => {
  const result = await ProductModal.findById(id);
  return result;
};

const updateQuantityServices = async (_id: string, quantity: number) => {
  const result = await ProductModal.findByIdAndUpdate(
    { _id },
    {
      $set: {
        inventory: {
          quantity: quantity,
        },
      },
    }
  );
  return result;
};

const deleteProductServices = async (id: string) => {
  const result = await ProductModal.findByIdAndDelete(id);
  return result;
};

const searchByTagServices = async (tag: string) => {
  const result = await ProductModal.find({ tags: { $in: [tag] } });

  return result;
};

export {
  createProductServices,
  getAllProductServices,
  getProductByIdServices,
  updateQuantityServices,
  deleteProductServices,
  searchByTagServices,
};
