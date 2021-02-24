"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopModel = void 0;
var mongoose_1 = require("mongoose");
var shopSchema = new mongoose_1.Schema({
    address: { type: String },
    phone: { type: String },
    location: { type: String },
    shipping: { type: String },
    status: { type: Boolean },
    logoUrl: { type: String },
}, {
    timestamps: true,
    versionKey: false,
});
exports.shopModel = mongoose_1.model('Shop', shopSchema);
