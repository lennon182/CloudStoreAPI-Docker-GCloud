"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_customer_controller_1 = __importDefault(require("../controllers/auth-customer.controller"));
var AuthRouter = /** @class */ (function () {
    function AuthRouter() {
        this.router = express_1.Router();
        this.getAuthCustomersRoutes();
    }
    AuthRouter.prototype.getAuthCustomersRoutes = function () {
        this.router.post("/login", auth_customer_controller_1.default.login());
        this.router.post("/register", auth_customer_controller_1.default.register());
    };
    return AuthRouter;
}());
exports.default = AuthRouter;
