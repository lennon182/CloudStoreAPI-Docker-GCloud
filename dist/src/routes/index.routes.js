"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var IndexRouter = /** @class */ (function () {
    function IndexRouter() {
        this.apiVersion = '1.0';
        this.router = express_1.Router();
        this.getIndexRoutes();
    }
    IndexRouter.prototype.getIndexRoutes = function () {
        var _this = this;
        this.router.get("/", function (req, resp) {
            resp.send("\n            <h1>Welcome Api " + _this.apiVersion + "</h1>\n          ");
        });
    };
    return IndexRouter;
}());
exports.default = IndexRouter;
