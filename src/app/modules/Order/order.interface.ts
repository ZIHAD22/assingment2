type OrderT = {
  email: string;
  productId: string;
  price: number;
  quantity: number;
};

type UpdateOrderQuantityDataT = {
  productId: string;
  quantity: number;
};

export { OrderT, UpdateOrderQuantityDataT };
