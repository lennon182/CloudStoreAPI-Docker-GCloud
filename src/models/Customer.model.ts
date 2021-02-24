import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';

const customerSchema = new Schema(
  {
    name: { type: String, required: [true, 'Name is required'] },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: [true, 'Email already exists'],
    },
    password: { type: String, required: [true, 'Password is required'] },
    // roles: { ref: 'Rol', type: Schema.Types.ObjectId },
    rolename: { type: String },
    address: { type: String },
    phone: { type: String },
    location: { type: String },
    status: { type: Boolean },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Methods
customerSchema.method('encryptPassword', (password: string) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
});

customerSchema.method('comparePassword', (comparePassword: string, encryptPassword: string) => {
  return bcrypt.compareSync(comparePassword, encryptPassword);
});

// InterFace
interface CustomerI extends Document {
  name: string;
  email: string;
  password: string;
  //   roles: String;
  rolename: String;
  address: string;
  phone: string;
  location: string;
  status: boolean;
  comparePassword(comparePassword: string, encryptPassword: string): boolean;
  encryptPassword(password: string): string;
}

export const customerModel = model<CustomerI>('Customer', customerSchema);
