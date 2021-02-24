import { Schema, model, Document } from 'mongoose';

const shopSchema = new Schema(
  {
    address: { type: String },
    phone: { type: String },
    location: { type: String },
    shipping: { type: String },
    status: { type: Boolean },
    logoUrl: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// InterFace
interface ShopI extends Document {
  address: string;
  phone: string;
  location: string;
  shipping: number;
  status: boolean;
  logo: string;
}

export const shopModel = model<ShopI>('Shop', shopSchema);
