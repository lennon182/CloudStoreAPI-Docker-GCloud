"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = __importDefault(require("../controllers/user.controller"));
var auth_midd_1 = __importDefault(require("./../middlewares/auth.midd"));
var UserRouter = /** @class */ (function () {
    function UserRouter() {
        this.path = 'users';
        this.router = express_1.Router();
        this.userController = new user_controller_1.default();
        this.authMiddleware = new auth_midd_1.default();
        this.getUserRoutes();
    }
    UserRouter.prototype.getUserRoutes = function () {
        // PROTECTED
        this.router.get("/" + this.path, [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()], this.userController.getUsers());
        this.router.get("/" + this.path + "/:userId", [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()], this.userController.getUser());
        this.router.post("/" + this.path, [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()], this.userController.createUSer());
        this.router.put("/" + this.path + "/:userId", [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()], this.userController.updateUser());
        this.router.delete("/" + this.path + "/:userId", [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()], this.userController.deletUser());
    };
    return UserRouter;
}());
exports.default = UserRouter;
