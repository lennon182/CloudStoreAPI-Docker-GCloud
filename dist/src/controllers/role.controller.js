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
var Rol_model_1 = require("../models/Rol.model");
var rolController = /** @class */ (function () {
    function rolController() {
        this.getRolesController = '';
        //   private getUserController: any = '';
        this.createRolController = '';
        this.updateRolController = '';
        //   private deleteUserController: any = '';
        this.Rol = Rol_model_1.rolModel;
    }
    rolController.prototype.getRoles = function () {
        var _this = this;
        this.getRolesController = function (req, resp) { return __awaiter(_this, void 0, void 0, function () {
            var users, usersCount, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.Rol.find()];
                    case 1:
                        users = _a.sent();
                        usersCount = users.length;
                        return [2 /*return*/, resp.json({
                                msg: 'Get Roles Controller',
                                users: users,
                                usersCount: usersCount,
                                ok: true,
                            })];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, resp.json({
                                msg: 'ERROR in get Role Method',
                                error: error_1,
                                ok: false,
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        return this.getRolesController;
    };
    rolController.prototype.createRole = function () {
        var _this = this;
        this.createRolController = function (req, resp) { return __awaiter(_this, void 0, void 0, function () {
            var body, userCreated, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = req.body;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.Rol.create(body)];
                    case 2:
                        userCreated = _a.sent();
                        return [2 /*return*/, resp.json({
                                msg: 'Create New Role',
                                userCreated: userCreated,
                                ok: true,
                            })];
                    case 3:
                        error_2 = _a.sent();
                        return [2 /*return*/, resp.json({
                                msg: 'ERROR in Create Role Method',
                                error: error_2,
                                ok: false,
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        return this.createRolController;
    };
    rolController.prototype.updateRoll = function () {
        var _this = this;
        this.updateRolController = function (req, resp) { return __awaiter(_this, void 0, void 0, function () {
            var rollId, body, rollUpdate, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rollId = req.params.rollId;
                        body = req.body;
                        console.log(body);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.Rol.findByIdAndUpdate(rollId, body, {
                                new: true,
                            })];
                    case 2:
                        rollUpdate = _a.sent();
                        return [2 /*return*/, resp.json({
                                msg: 'Update Roll',
                                rollId: rollId,
                                rollUpdate: rollUpdate,
                                ok: true,
                            })];
                    case 3:
                        error_3 = _a.sent();
                        return [2 /*return*/, resp.json({
                                msg: 'Update Roll Error',
                                ok: false,
                                error: error_3,
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        return this.updateRolController;
    };
    return rolController;
}());
exports.default = rolController;
