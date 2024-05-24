type VariantsT = {
  type: string;
  value: string;
};

type InventoryT = {
  quantity: number;
  inStock: boolean;
};

type ProductT = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: VariantsT[];
  inventory: InventoryT;
};

export { ProductT };
