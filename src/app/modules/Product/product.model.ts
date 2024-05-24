import { Schema, model } from "mongoose";
import { ProductT } from "./product.interface";

const productSchema = new Schema<ProductT>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
  },
  variants: {
    type: [
      {
        type: {
          type: String,
        },
        value: {
          type: String,
        },
      },
    ],
  },
  tags: {
    type: [String],
  },
  inventory: {
    type: {
      quantity: {
        type: Number,
        required: true,
      },
      inStock: {
        type: Boolean,
        required: true,
      },
    },
  },
});

const ProductModal = model<ProductT>("product", productSchema);

export { ProductModal };
