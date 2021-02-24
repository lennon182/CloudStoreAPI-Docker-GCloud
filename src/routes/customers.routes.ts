import express, { Request, Response, Router } from 'express';
import customerController from '../controllers/customerController';
import AuthMiddleware from './../middlewares/auth.midd';

export default class UserRouter {
  router: Router;
  private path: string = 'customers';
  private customerController;
  private authMiddleware;

  constructor() {
    this.router = Router();
    this.customerController = new customerController();
    this.authMiddleware = new AuthMiddleware();
    this.getCustomerRoutes();
  }

  private getCustomerRoutes() {
    this.router.get(`/${this.path}`, this.customerController.getCustomers());
    this.router.get(`/${this.path}/:customerId`, this.customerController.getCustomer());
    this.router.post(`/${this.path}`, this.customerController.createCustomer());
    this.router.put(`/${this.path}/:customerId`, this.customerController.updateCustomer());
    this.router.delete(`/${this.path}/:customerId`, this.customerController.deleteCustomer());
  }
}
