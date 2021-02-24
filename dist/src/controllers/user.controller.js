"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_model_1 = require("../models/User.model");
var userController = /** @class */ (function () {
    function userController() {
        this.getUsersController = '';
        this.getUserController = '';
        this.createUserController = '';
        this.updateUserController = '';
        this.deleteUserController = '';
        this.User = User_model_1.userModel;
    }
    userController.prototype.getUsers = function () {
        var _this = this;
        this.getUsersController = function (req, resp) { return __awaiter(_this, void 0, void 0, function () {
            var users, usersCount, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.User.find()];
                    case 1:
                        users = _a.sent();
                        usersCount = users.length;
                        return [2 /*return*/, resp.json({
                                msg: 'Get Users Controller',
                                users: users,
                                usersCount: usersCount,
                                ok: true,
                            })];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, resp.json({
                                msg: 'ERROR in get User Method',
                                error: error_1,
                                ok: false,
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        return this.getUsersController;
    };
    userController.prototype.getUser = function () {
        var _this = this;
        this.getUserController = function (req, resp) { return __awaiter(_this, void 0, void 0, function () {
            var userId, userFound, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = req.params.userId;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.User.findById(userId)];
                    case 2:
                        userFound = _a.sent();
                        if (userFound === null) {
                            return [2 /*return*/, resp.json({
                                    msg: 'User Not Found',
                                    ok: false,
                                })];
                        }
                        return [2 /*return*/, resp.json({
                                msg: 'Get user',
                                userId: userId,
                                userFound: userFound,
                                ok: true,
                            })];
                    case 3:
                        error_2 = _a.sent();
                        return [2 /*return*/, resp.json({
                                msg: 'Get user Error',
                                ok: false,
                                error: error_2,
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        return this.getUserController;
    };
    userController.prototype.createUSer = function () {
        var _this = this;
        this.createUserController = function (req, resp) { return __awaiter(_this, void 0, void 0, function () {
            var newUser, userCreated, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newUser = req.body;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.User.create(newUser)];
                    case 2:
                        userCreated = _a.sent();
                        return [2 /*return*/, resp.json({
                                msg: 'Create New User',
                                userCreated: userCreated,
                                ok: true,
                            })];
                    case 3:
                        error_3 = _a.sent();
                        return [2 /*return*/, resp.json({
                                msg: 'ERROR in Create User Method',
                                error: error_3,
                                ok: false,
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        return this.createUserController;
    };
    userController.prototype.updateUser = function () {
        var _this = this;
        this.updateUserController = function (req, resp) { return __awaiter(_this, void 0, void 0, function () {
            var userId, body, userUpdated, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = req.params.userId;
                        body = req.body;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.User.findByIdAndUpdate(userId, body, {
                                new: true,
                            })];
                    case 2:
                        userUpdated = _a.sent();
                        return [2 /*return*/, resp.json({
                                msg: 'Update User',
                                userId: userId,
                                userUpdated: userUpdated,
                                ok: true,
                            })];
                    case 3:
                        error_4 = _a.sent();
                        return [2 /*return*/, resp.json({
                                msg: 'Update User Error',
                                ok: false,
                                error: error_4,
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        return this.updateUserController;
    };
    userController.prototype.deletUser = function () {
        var _this = this;
        this.deleteUserController = function (req, resp) { return __awaiter(_this, void 0, void 0, function () {
            var userId, userDeleted, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = req.params.userId;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.User.findByIdAndDelete(userId)];
                    case 2:
                        userDeleted = _a.sent();
                        return [2 /*return*/, resp.json({
                                msg: 'Delete User',
                                userId: userId,
                                userDeleted: userDeleted,
                                ok: true,
                            })];
                    case 3:
                        error_5 = _a.sent();
                        return [2 /*return*/, resp.json({
                                msg: 'Delete User Error',
                                ok: false,
                                error: error_5,
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        return this.deleteUserController;
    };
    return userController;
}());
exports.default = userController;
