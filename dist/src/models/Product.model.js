"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModel = void 0;
var mongoose_1 = require("mongoose");
var productSchema = new mongoose_1.Schema({
    price: { type: Number },
    name: { type: String },
    unit: { type: String },
    img: { type: String },
    description: { type: String },
    status: { type: Boolean },
    createtBy: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
    },
}, {
    timestamps: true,
    versionKey: false,
});
exports.productModel = mongoose_1.model('Product', productSchema);
