"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
var mongoose_1 = require("mongoose");
var bcrypt_1 = __importDefault(require("bcrypt"));
var userSchema = new mongoose_1.Schema({
    name: { type: String, required: [true, 'Name is required'] },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email already exists'],
    },
    password: { type: String, required: [true, 'Password is required'] },
    // roles: [{ ref: 'Rol', type: Schema.Types.ObjectId }],
    // roles: { ref: 'Rol', type: Schema.Types.ObjectId },
    rolename: { type: String },
    status: { type: Boolean },
}, {
    timestamps: true,
    versionKey: false,
});
// Methods
userSchema.method('encryptPassword', function (password) {
    var salt = bcrypt_1.default.genSaltSync(10);
    return bcrypt_1.default.hashSync(password, salt);
});
userSchema.method('comparePassword', function (comparePassword, encryptPassword) {
    return bcrypt_1.default.compareSync(comparePassword, encryptPassword);
});
exports.userModel = mongoose_1.model('User', userSchema);
