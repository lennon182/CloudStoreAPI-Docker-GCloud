import { Request, Response } from 'express';
import { productModel } from '../models/Product.model';

export default class productController {
  private getProductsController: any = '';
  private getProductController: any = '';
  private createProductController: any = '';
  private updateProductController: any = '';
  private deleteProductController: any = '';

  private Product = productModel;

  constructor() {}

  getProducts() {
    this.getProductsController = async (req: Request, resp: Response) => {
      try {
        const products = await this.Product.find();
        const productsCount = products.length;

        return resp.json({
          msg: 'Get Products Controller',
          products,
          productsCount,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'ERROR in get Products Method',
          error,
          ok: false,
        });
      }
    };
    return this.getProductsController;
  }

  getProduct() {
    this.getProductController = async (req: Request, resp: Response) => {
      const { productId } = req.params;

      try {
        const productFound = await this.Product.findById(productId);

        console.log('ProductFound', productFound);

        if (productFound === null) {
          return resp.json({
            msg: 'Product Not Found',
            ok: false,
          });
        }

        return resp.json({
          msg: 'Get product',
          productFound,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'Get Product Error',
          ok: false,
          error,
        });
      }
    };
    return this.getProductController;
  }

  createProduct() {
    this.createProductController = async (req: Request, resp: Response) => {
      const newProduct = req.body;
      console.log(newProduct);

      newProduct.createtBy = '602a6bc1eab6032bde12d7a6';

      try {
        const productCreated = await this.Product.create(newProduct);

        return resp.json({
          msg: 'Create New Product',
          productCreated,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'ERROR in Create Product Method',
          error,
          ok: false,
        });
      }
    };
    return this.createProductController;
  }

  updateProduct() {
    this.updateProductController = async (req: Request, resp: Response) => {
      const { productId } = req.params;
      const { body } = req;
      try {
        const productUpdated = await this.Product.findByIdAndUpdate(productId, body, {
          new: true,
        });

        return resp.json({
          msg: 'Update Product',
          productUpdated,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'Update Product Error',
          ok: false,
          error,
        });
      }
    };

    return this.updateProductController;
  }

  deleteProduct() {
    this.deleteProductController = async (req: Request, resp: Response) => {
      const { productId } = req.params;
      try {
        const productDeleted = await this.Product.findByIdAndDelete(productId);

        return resp.json({
          msg: 'Delete Product',
          productDeleted,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'Delete Product Error',
          ok: false,
          error,
        });
      }
    };

    return this.deleteProductController;
  }
}
