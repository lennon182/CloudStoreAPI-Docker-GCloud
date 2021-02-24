"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerModel = void 0;
var mongoose_1 = require("mongoose");
var bcrypt_1 = __importDefault(require("bcrypt"));
var customerSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
    versionKey: false,
});
// Methods
customerSchema.method('encryptPassword', function (password) {
    var salt = bcrypt_1.default.genSaltSync(10);
    return bcrypt_1.default.hashSync(password, salt);
});
customerSchema.method('comparePassword', function (comparePassword, encryptPassword) {
    return bcrypt_1.default.compareSync(comparePassword, encryptPassword);
});
exports.customerModel = mongoose_1.model('Customer', customerSchema);
