"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
var AuthRouter = /** @class */ (function () {
    function AuthRouter() {
        this.router = express_1.Router();
        this.getAuthRoutes();
    }
    AuthRouter.prototype.getAuthRoutes = function () {
        this.router.post("/admin/login", auth_controller_1.default.login());
        this.router.post("/admin/register", auth_controller_1.default.register());
    };
    return AuthRouter;
}());
exports.default = AuthRouter;
