"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rolModel = void 0;
var mongoose_1 = require("mongoose");
var rolSchema = new mongoose_1.Schema({
    name: { type: String },
    description: { type: String },
}, {
    timestamps: true,
    versionKey: false,
});
exports.rolModel = mongoose_1.model('Rol', rolSchema);
