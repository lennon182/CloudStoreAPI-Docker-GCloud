import { Router } from 'express';
import AuthController from '../controllers/auth.controller';

export default class AuthRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.getAuthRoutes();
  }

  private getAuthRoutes() {
    this.router.post(`/admin/login`, AuthController.login());
    this.router.post(`/admin/register`, AuthController.register());
  }
}
