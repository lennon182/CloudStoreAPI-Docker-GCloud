import { Router } from 'express';
import AuthCustomerController from '../controllers/auth-customer.controller';

export default class AuthRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.getAuthCustomersRoutes();
  }

  private getAuthCustomersRoutes() {
    this.router.post(`/login`, AuthCustomerController.login());
    this.router.post(`/register`, AuthCustomerController.register());
  }
}
