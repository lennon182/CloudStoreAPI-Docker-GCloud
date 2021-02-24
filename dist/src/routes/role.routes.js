"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var role_controller_1 = __importDefault(require("../controllers/role.controller"));
var auth_midd_1 = __importDefault(require("../middlewares/auth.midd"));
var AuthRouter = /** @class */ (function () {
    function AuthRouter() {
        this.path = 'roles';
        this.router = express_1.Router();
        this.rolController = new role_controller_1.default();
        this.authMiddleware = new auth_midd_1.default();
        this.getRolRoutes();
    }
    AuthRouter.prototype.getRolRoutes = function () {
        // PROTECTED
        this.router.get("/" + this.path, [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()], this.rolController.getRoles());
        this.router.post("/" + this.path, [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()], this.rolController.createRole());
        this.router.put("/" + this.path + "/:rollId", [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()], this.rolController.updateRoll());
    };
    return AuthRouter;
}());
exports.default = AuthRouter;
