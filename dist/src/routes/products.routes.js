"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var product_controller_1 = __importDefault(require("../controllers/product.controller"));
var auth_midd_1 = __importDefault(require("../middlewares/auth.midd"));
var ProductRouter = /** @class */ (function () {
    function ProductRouter() {
        this.path = 'products';
        this.router = express_1.Router();
        this.productController = new product_controller_1.default();
        this.authMiddleware = new auth_midd_1.default();
        this.getProductsRoutes();
    }
    ProductRouter.prototype.getProductsRoutes = function () {
        this.router.get("/" + this.path, this.productController.getProducts());
        this.router.get("/" + this.path + "/:productId", this.productController.getProduct());
        // PROTECTED
        this.router.post("/" + this.path, [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()], this.productController.createProduct());
        this.router.put("/" + this.path + "/:productId", [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()], this.productController.updateProduct());
        this.router.delete("/" + this.path + "/:productId", [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()], this.productController.deleteProduct());
    };
    return ProductRouter;
}());
exports.default = ProductRouter;
