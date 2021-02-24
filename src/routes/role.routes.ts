import { Router } from 'express';
import rolController from '../controllers/role.controller';
import AuthMiddleware from '../middlewares/auth.midd';

export default class AuthRouter {
  router: Router;
  private path: string = 'roles';
  private rolController;
  private authMiddleware;

  constructor() {
    this.router = Router();
    this.rolController = new rolController();
    this.authMiddleware = new AuthMiddleware();
    this.getRolRoutes();
  }

  private getRolRoutes() {
    // PROTECTED
    this.router.get(
      `/${this.path}`,
      [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()],
      this.rolController.getRoles()
    );
    this.router.post(
      `/${this.path}`,
      [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()],
      this.rolController.createRole()
    );
    this.router.put(
      `/${this.path}/:rollId`,
      [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()],
      this.rolController.updateRoll()
    );
  }
}
