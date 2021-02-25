import express from 'express';
import { DbConnection } from './src/db/Dbconnection';
import Server from './src/server';
import { config } from 'dotenv';
import cors from 'cors';

//
import AuthRouter from './src/routes/auth.routes';
import AuthCustomerRouter from './src/routes/auth-customer.routes';
import IndexRouter from './src/routes/index.routes';
import UserRouter from './src/routes/users.routes';
import CustomerRouter from './src/routes/customers.routes';
import ProductRouter from './src/routes/products.routes';
import OrderRouter from './src/routes/orders.routes';
import RolRouter from './src/routes/role.routes';
//

config();
const db = new DbConnection();
const server = new Server();
const dbConnection = new DbConnection();
//
const indexRoutes = new IndexRouter();
const authRoutes = new AuthRouter();
const authCustomerRouter = new AuthCustomerRouter();
const userRoutes = new UserRouter();
const customerRoutes = new CustomerRouter();
const productRoutes = new ProductRouter();
const orderRoutes = new OrderRouter();
const rolRouter = new RolRouter();

server.app.use(cors());
server.app.use(express.json());
server.app.use(express.urlencoded({ extended: true }));

server.app.use('/', indexRoutes.router);
server.app.use('/', authRoutes.router);
server.app.use('/', authCustomerRouter.router);
server.app.use('/', userRoutes.router);
server.app.use('/', customerRoutes.router);
server.app.use('/', productRoutes.router);
server.app.use('/', orderRoutes.router);
server.app.use('/', rolRouter.router);

server.startSever((port: number) => console.log(`🔥[app-status]: Server Up!, Port: ${port}`));
db.dbStart();
