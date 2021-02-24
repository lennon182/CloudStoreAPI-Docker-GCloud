"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var order_Controller_1 = __importDefault(require("../controllers/order.Controller"));
var auth_midd_1 = __importDefault(require("../middlewares/auth.midd"));
var OrderRouter = /** @class */ (function () {
    function OrderRouter() {
        this.path = 'orders';
        this.router = express_1.Router();
        this.orderController = new order_Controller_1.default();
        this.authMiddleware = new auth_midd_1.default();
        this.getOrdersRoutes();
    }
    OrderRouter.prototype.getOrdersRoutes = function () {
        // UNPROTECTED
        this.router.get("/" + this.path, this.orderController.getOrders());
        this.router.get("/" + this.path + "/:orderId", this.orderController.getOrder());
        // PROTECTED
        this.router.post("/" + this.path, [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()], this.orderController.createOrder());
        this.router.put("/" + this.path + "/:orderId", [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()], this.orderController.updateOrder());
        this.router.delete("/" + this.path + "/:orderId", [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()], this.orderController.deleteOrder());
    };
    return OrderRouter;
}());
exports.default = OrderRouter;
// [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()],
