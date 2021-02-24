"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Server = /** @class */ (function () {
    function Server() {
        this.port = 0;
        this.port = parseInt("" + process.env.PORT) || 3000;
        this.app = express_1.default();
    }
    Server.prototype.startSever = function (cb) {
        this.app.listen(this.port, cb(this.port));
    };
    return Server;
}());
exports.default = Server;
