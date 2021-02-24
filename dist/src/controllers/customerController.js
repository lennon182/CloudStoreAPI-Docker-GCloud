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
var Customer_model_1 = require("../models/Customer.model");
var customerController = /** @class */ (function () {
    function customerController() {
        this.getCustomersController = '';
        this.getCustomerController = '';
        this.createCustomerController = '';
        this.updateCustomerController = '';
        this.deleteCustomerController = '';
        this.Customer = Customer_model_1.customerModel;
    }
    customerController.prototype.getCustomers = function () {
        var _this = this;
        this.getCustomersController = function (req, resp) { return __awaiter(_this, void 0, void 0, function () {
            var customers, customerCount, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.Customer.find()];
                    case 1:
                        customers = _a.sent();
                        customerCount = customers.length;
                        return [2 /*return*/, resp.json({
                                msg: 'Get Customer Controller',
                                customers: customers,
                                customerCount: customerCount,
                                ok: true,
                            })];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, resp.json({
                                msg: 'ERROR in get Customer Method',
                                error: error_1,
                                ok: false,
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        return this.getCustomersController;
    };
    customerController.prototype.getCustomer = function () {
        var _this = this;
        this.getCustomerController = function (req, resp) { return __awaiter(_this, void 0, void 0, function () {
            var customerId, customerFound, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        customerId = req.params.customerId;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.Customer.findById(customerId)];
                    case 2:
                        customerFound = _a.sent();
                        console.log('customerFound', customerFound);
                        if (customerFound === null) {
                            return [2 /*return*/, resp.json({
                                    msg: 'Customer Not Found',
                                    ok: false,
                                })];
                        }
                        return [2 /*return*/, resp.json({
                                msg: 'Get Customer',
                                customerId: customerId,
                                customerFound: customerFound,
                                ok: true,
                            })];
                    case 3:
                        error_2 = _a.sent();
                        return [2 /*return*/, resp.json({
                                msg: 'Get Customer Error',
                                ok: false,
                                error: error_2,
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        return this.getCustomerController;
    };
    customerController.prototype.createCustomer = function () {
        var _this = this;
        this.createCustomerController = function (req, resp) { return __awaiter(_this, void 0, void 0, function () {
            var newCustomer, customerCreated, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newCustomer = req.body;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.Customer.create(newCustomer)];
                    case 2:
                        customerCreated = _a.sent();
                        return [2 /*return*/, resp.json({
                                msg: 'Create New Customer',
                                customerCreated: customerCreated,
                                ok: true,
                            })];
                    case 3:
                        error_3 = _a.sent();
                        return [2 /*return*/, resp.json({
                                msg: 'ERROR in Create Customer Method',
                                error: error_3,
                                ok: false,
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        return this.createCustomerController;
    };
    customerController.prototype.updateCustomer = function () {
        var _this = this;
        this.updateCustomerController = function (req, resp) { return __awaiter(_this, void 0, void 0, function () {
            var customerId, body, customerUpdated, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        customerId = req.params.customerId;
                        body = req.body;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.Customer.findByIdAndUpdate(customerId, body, {
                                new: true,
                            })];
                    case 2:
                        customerUpdated = _a.sent();
                        return [2 /*return*/, resp.json({
                                msg: 'Update Customer',
                                customerId: customerId,
                                customerUpdated: customerUpdated,
                                ok: true,
                            })];
                    case 3:
                        error_4 = _a.sent();
                        return [2 /*return*/, resp.json({
                                msg: 'Update Customer Error',
                                ok: false,
                                error: error_4,
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        return this.updateCustomerController;
    };
    customerController.prototype.deleteCustomer = function () {
        var _this = this;
        this.deleteCustomerController = function (req, resp) { return __awaiter(_this, void 0, void 0, function () {
            var customerId, customerDeleted, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        customerId = req.params.customerId;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.Customer.findByIdAndDelete(customerId)];
                    case 2:
                        customerDeleted = _a.sent();
                        return [2 /*return*/, resp.json({
                                msg: 'Delete Customer',
                                customerId: customerId,
                                customerDeleted: customerDeleted,
                                ok: true,
                            })];
                    case 3:
                        error_5 = _a.sent();
                        return [2 /*return*/, resp.json({
                                msg: 'Delete Customer Error',
                                ok: false,
                                error: error_5,
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        return this.deleteCustomerController;
    };
    return customerController;
}());
exports.default = customerController;
