import { Request, Response } from 'express';
import { orderModel } from '../models/Order.model';

export default class orderController {
  private getOrdersController: any = '';
  private getOrderController: any = '';
  private createOrderController: any = '';
  private updateOrderController: any = '';
  private deleteorderController: any = '';

  private Order = orderModel;

  constructor() {}

  getOrders() {
    this.getOrdersController = async (req: Request, resp: Response) => {
      try {
        const orders = await this.Order.find();
        const ordersCount = orders.length;

        return resp.json({
          msg: 'Get Orders Controller',
          orders,
          ordersCount,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'ERROR in get Orders Method',
          error,
          ok: false,
        });
      }
    };
    return this.getOrdersController;
  }

  getOrder() {
    this.getOrderController = async (req: Request, resp: Response) => {
      const { orderId } = req.params;

      try {
        const orderFound = await this.Order.findById(orderId);

        console.log('orderFound', orderFound);

        if (orderFound === null) {
          return resp.json({
            msg: 'Order Not Found',
            ok: false,
          });
        }

        return resp.json({
          msg: 'Get Order',
          orderId,
          orderFound,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'Get Order Error',
          ok: false,
          error,
        });
      }
    };
    return this.getOrderController;
  }

  createOrder() {
    this.createOrderController = async (req: Request, resp: Response) => {
      const neworder = req.body;

      try {
        const orderCreated = await this.Order.create(neworder);

        return resp.json({
          msg: 'Create New Order',
          orderCreated,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'ERROR in Create Order Method',
          error,
          ok: false,
        });
      }
    };
    return this.createOrderController;
  }

  updateOrder() {
    this.updateOrderController = async (req: Request, resp: Response) => {
      const { orderId } = req.params;
      const { body } = req;
      try {
        const orderUpdated = await this.Order.findByIdAndUpdate(orderId, body, {
          new: true,
        });

        return resp.json({
          msg: 'Update Order',
          orderId,
          orderUpdated,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'Update Order Error',
          ok: false,
          error,
        });
      }
    };

    return this.updateOrderController;
  }

  deleteOrder() {
    this.deleteorderController = async (req: Request, resp: Response) => {
      const { orderId } = req.params;
      try {
        const orderDeleted = await this.Order.findByIdAndDelete(orderId);

        return resp.json({
          msg: 'Delete Order',
          orderId,
          orderDeleted,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'Delete Order Error',
          ok: false,
          error,
        });
      }
    };

    return this.deleteorderController;
  }
}
