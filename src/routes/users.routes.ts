import express, { Request, Response, Router } from 'express';
import userController from '../controllers/user.controller';
import AuthMiddleware from './../middlewares/auth.midd';

export default class UserRouter {
  router: Router;
  private path: string = 'users';
  private userController;
  private authMiddleware;

  constructor() {
    this.router = Router();
    this.userController = new userController();
    this.authMiddleware = new AuthMiddleware();

    this.getUserRoutes();
  }

  private getUserRoutes() {
    // PROTECTED
    this.router.get(
      `/${this.path}`,
      [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()],
      this.userController.getUsers()
    );
    this.router.get(
      `/${this.path}/:userId`,
      [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()],
      this.userController.getUser()
    );
    this.router.post(
      `/${this.path}`,
      [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()],
      this.userController.createUSer()
    );
    this.router.put(
      `/${this.path}/:userId`,
      [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()],
      this.userController.updateUser()
    );
    this.router.delete(
      `/${this.path}/:userId`,
      [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()],
      this.userController.deletUser()
    );
  }
}
