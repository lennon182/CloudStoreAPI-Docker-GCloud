import { Schema, model, Document } from 'mongoose';

const orderSchema = new Schema(
  {
    // customer: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Customer',
    // },
    customer: {
      type: String,
    },
    products: [
      {
        name: { type: String },
        product: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
        },
        unit: { type: String },
        price: { type: Number },
        quantity: { type: Number },
        total: { type: Number },
      },
    ],
    total: { type: Number },
    shipping: { type: Number },
    paymentMethod: { type: String },
    status: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const orderModel = model('Order', orderSchema);
