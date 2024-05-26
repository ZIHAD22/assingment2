import { z } from "zod";

const Variants = z.object({
  type: z.string(),
  value: z.string(),
});

const Inventory = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

const ProductValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  variants: z.array(Variants),
  tags: z.array(z.string()),
  inventory: Inventory,
});

export { ProductValidationSchema };
