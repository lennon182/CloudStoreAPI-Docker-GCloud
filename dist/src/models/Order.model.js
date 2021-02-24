"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderModel = void 0;
var mongoose_1 = require("mongoose");
var orderSchema = new mongoose_1.Schema({
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
                type: mongoose_1.Schema.Types.ObjectId,
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
}, {
    timestamps: true,
    versionKey: false,
});
exports.orderModel = mongoose_1.model('Order', orderSchema);
