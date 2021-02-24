"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var shop_controller_1 = __importDefault(require("../controllers/shop.controller"));
var auth_midd_1 = __importDefault(require("../middlewares/auth.midd"));
var OrderRouter = /** @class */ (function () {
    function OrderRouter() {
        this.path = 'shop';
        this.router = express_1.Router();
        this.shopController = new shop_controller_1.default();
        this.authMiddleware = new auth_midd_1.default();
        this.getShopRoutes();
    }
    OrderRouter.prototype.getShopRoutes = function () {
        // PROTECTED
        this.router.get("/" + this.path + "/:orderId", [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()], this.shopController.getShopInfo());
        this.router.post("/" + this.path, [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()], this.shopController.setShopInfo());
    };
    return OrderRouter;
}());
exports.default = OrderRouter;
