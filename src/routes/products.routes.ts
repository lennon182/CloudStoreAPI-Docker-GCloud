import express, { Request, Response, Router } from 'express';
import productController from '../controllers/product.controller';
import AuthMiddleware from '../middlewares/auth.midd';

export default class ProductRouter {
  router: Router;
  private path: string = 'products';
  private productController;
  private authMiddleware;

  constructor() {
    this.router = Router();
    this.productController = new productController();
    this.authMiddleware = new AuthMiddleware();

    this.getProductsRoutes();
  }

  private getProductsRoutes() {
    this.router.get(`/${this.path}`, this.productController.getProducts());
    this.router.get(`/${this.path}/:productId`, this.productController.getProduct());
    // PROTECTED
    this.router.post(
      `/${this.path}`,
      [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()],
      this.productController.createProduct()
    );
    this.router.put(
      `/${this.path}/:productId`,
      [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()],
      this.productController.updateProduct()
    );
    this.router.delete(
      `/${this.path}/:productId`,
      [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()],
      this.productController.deleteProduct()
    );
  }
}
