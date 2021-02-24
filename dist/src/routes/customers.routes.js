"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var customerController_1 = __importDefault(require("../controllers/customerController"));
var auth_midd_1 = __importDefault(require("./../middlewares/auth.midd"));
var UserRouter = /** @class */ (function () {
    function UserRouter() {
        this.path = 'customers';
        this.router = express_1.Router();
        this.customerController = new customerController_1.default();
        this.authMiddleware = new auth_midd_1.default();
        this.getCustomerRoutes();
    }
    UserRouter.prototype.getCustomerRoutes = function () {
        this.router.get("/" + this.path, this.customerController.getCustomers());
        this.router.get("/" + this.path + "/:customerId", this.customerController.getCustomer());
        this.router.post("/" + this.path, this.customerController.createCustomer());
        this.router.put("/" + this.path + "/:customerId", this.customerController.updateCustomer());
        this.router.delete("/" + this.path + "/:customerId", this.customerController.deleteCustomer());
    };
    return UserRouter;
}());
exports.default = UserRouter;
