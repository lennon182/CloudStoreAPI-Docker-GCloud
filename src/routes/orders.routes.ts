import express, { Request, Response, Router } from 'express';
import orderController from '../controllers/order.Controller';
import AuthMiddleware from '../middlewares/auth.midd';

export default class OrderRouter {
  router: Router;
  private path: string = 'orders';
  private orderController;
  private authMiddleware;

  constructor() {
    this.router = Router();
    this.orderController = new orderController();
    this.authMiddleware = new AuthMiddleware();
    this.getOrdersRoutes();
  }

  private getOrdersRoutes() {
    // UNPROTECTED
    this.router.get(`/${this.path}`, this.orderController.getOrders());
    this.router.get(`/${this.path}/:orderId`, this.orderController.getOrder());
    // PROTECTED
    this.router.post(
      `/${this.path}`,
      [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()],
      this.orderController.createOrder()
    );
    this.router.put(
      `/${this.path}/:orderId`,
      [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()],
      this.orderController.updateOrder()
    );
    this.router.delete(
      `/${this.path}/:orderId`,
      [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()],
      this.orderController.deleteOrder()
    );
  }
}

// [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()],
