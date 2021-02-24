import { Schema, model, Document } from 'mongoose';

const rolSchema = new Schema(
  {
    name: { type: String },
    description: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const rolModel = model('Rol', rolSchema);
