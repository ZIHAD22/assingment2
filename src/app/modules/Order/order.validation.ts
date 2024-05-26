import { z } from "zod";

const OrderValidationSchema = z.object({
  email: z.string().email(), // Assuming email validation is required
  productId: z.string(),
  price: z.number(),
  quantity: z.number(),
});

export { OrderValidationSchema };
