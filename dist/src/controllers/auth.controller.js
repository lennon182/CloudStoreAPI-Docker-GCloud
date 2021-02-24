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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var token_lib_1 = __importDefault(require("../libs/token.lib"));
var User_model_1 = require("./../models/User.model");
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.login = function () {
        var _this = this;
        this.loginController = function (req, resp) { return __awaiter(_this, void 0, void 0, function () {
            var _a, email, password, roles, userExist, oKPassword, token, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, email = _a.email, password = _a.password, roles = _a.roles;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.User.findOne({ email: email })];
                    case 2:
                        userExist = _b.sent();
                        if (userExist === null) {
                            return [2 /*return*/, resp.json({
                                    msg: '*Wrong credentials*',
                                    ok: true,
                                })];
                        }
                        oKPassword = userExist.comparePassword(password, userExist.password);
                        if (!oKPassword) {
                            return [2 /*return*/, resp.json({
                                    msg: '**Wrong credentials**',
                                    ok: true,
                                })];
                        }
                        if (userExist.rolename !== 'admin') {
                            return [2 /*return*/, resp.json({
                                    msg: '**NotAuthorized**',
                                    ok: false,
                                })];
                        }
                        token = token_lib_1.default.getToken({
                            id: userExist._id,
                            name: userExist.name,
                            email: userExist.email,
                            role: userExist.rolename,
                        });
                        return [2 /*return*/, resp.json({
                                msg: 'Login Success',
                                token: token,
                                ok: true,
                            })];
                    case 3:
                        error_1 = _b.sent();
                        return [2 /*return*/, resp.json({
                                msg: 'Login Error',
                                error: error_1,
                                ok: false,
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        return this.loginController;
    };
    AuthController.register = function () {
        var _this = this;
        this.registerController = function (req, resp) { return __awaiter(_this, void 0, void 0, function () {
            var _a, name, email, password, address, phone, location, shipping, logo, newUser, userRegistred, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, name = _a.name, email = _a.email, password = _a.password, address = _a.address, phone = _a.phone, location = _a.location, shipping = _a.shipping, logo = _a.logo;
                        newUser = new this.User();
                        newUser.name = name;
                        newUser.email = email;
                        newUser.password = newUser.encryptPassword(password);
                        newUser.status = true;
                        newUser.rolename = 'admin';
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, newUser.save()];
                    case 2:
                        userRegistred = _b.sent();
                        return [2 /*return*/, resp.json({
                                msg: 'Register',
                                userRegistred: userRegistred,
                                ok: true,
                            })];
                    case 3:
                        error_2 = _b.sent();
                        return [2 /*return*/, resp.json({
                                msg: 'Register error',
                                error: error_2,
                                ok: false,
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        return this.registerController;
    };
    AuthController.loginController = '';
    AuthController.registerController = '';
    AuthController.User = User_model_1.userModel;
    return AuthController;
}());
exports.default = AuthController;
