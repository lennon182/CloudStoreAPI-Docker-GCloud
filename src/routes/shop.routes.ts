import express, { Request, Response, Router } from 'express';
import shopController from '../controllers/shop.controller';
import AuthMiddleware from '../middlewares/auth.midd';

export default class OrderRouter {
  router: Router;
  private path: string = 'shop';
  private shopController;
  private authMiddleware;

  constructor() {
    this.router = Router();
    this.shopController = new shopController();
    this.authMiddleware = new AuthMiddleware();
    this.getShopRoutes();
  }

  private getShopRoutes() {
    // PROTECTED
    this.router.get(
      `/${this.path}/:orderId`,
      [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()],
      this.shopController.getShopInfo()
    );
    this.router.post(
      `/${this.path}`,
      [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()],
      this.shopController.setShopInfo()
    );
  }
}
