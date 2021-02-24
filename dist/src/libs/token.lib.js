"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var Token = /** @class */ (function () {
    function Token() {
    }
    Token.getToken = function (data) {
        var token = jsonwebtoken_1.default.sign(data, "" + process.env.JWT_KEY, { expiresIn: 86400 });
        return token;
    };
    Token.verifyToken = function (token) {
        return jsonwebtoken_1.default.verify(token, "" + process.env.JWT_KEY);
    };
    return Token;
}());
exports.default = Token;
