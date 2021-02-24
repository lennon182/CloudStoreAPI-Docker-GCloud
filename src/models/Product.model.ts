import { Schema, model, Document } from 'mongoose';

const productSchema = new Schema(
  {
    price: { type: Number },
    name: { type: String },
    unit: { type: String },
    img: { type: String },
    description: { type: String },
    status: { type: Boolean },
    createtBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const productModel = model('Product', productSchema);
