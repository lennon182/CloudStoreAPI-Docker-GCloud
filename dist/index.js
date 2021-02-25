"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Dbconnection_1 = require("./src/db/Dbconnection");
var server_1 = __importDefault(require("./src/server"));
var dotenv_1 = require("dotenv");
var cors_1 = __importDefault(require("cors"));
//
var auth_routes_1 = __importDefault(require("./src/routes/auth.routes"));
var auth_customer_routes_1 = __importDefault(require("./src/routes/auth-customer.routes"));
var index_routes_1 = __importDefault(require("./src/routes/index.routes"));
var users_routes_1 = __importDefault(require("./src/routes/users.routes"));
var customers_routes_1 = __importDefault(require("./src/routes/customers.routes"));
var products_routes_1 = __importDefault(require("./src/routes/products.routes"));
var orders_routes_1 = __importDefault(require("./src/routes/orders.routes"));
var role_routes_1 = __importDefault(require("./src/routes/role.routes"));
//
dotenv_1.config();
var db = new Dbconnection_1.DbConnection();
var server = new server_1.default();
var dbConnection = new Dbconnection_1.DbConnection();
//
var indexRoutes = new index_routes_1.default();
var authRoutes = new auth_routes_1.default();
var authCustomerRouter = new auth_customer_routes_1.default();
var userRoutes = new users_routes_1.default();
var customerRoutes = new customers_routes_1.default();
var productRoutes = new products_routes_1.default();
var orderRoutes = new orders_routes_1.default();
var rolRouter = new role_routes_1.default();
server.app.use(cors_1.default());
server.app.use(express_1.default.json());
server.app.use(express_1.default.urlencoded({ extended: true }));
server.app.use('/', indexRoutes.router);
server.app.use('/', authRoutes.router);
server.app.use('/', authCustomerRouter.router);
server.app.use('/', userRoutes.router);
server.app.use('/', customerRoutes.router);
server.app.use('/', productRoutes.router);
server.app.use('/', orderRoutes.router);
server.app.use('/', rolRouter.router);
server.startSever(function (port) { return console.log("\uD83D\uDD25[app-status]: Server Up!, Port: " + port); });
db.dbStart();
