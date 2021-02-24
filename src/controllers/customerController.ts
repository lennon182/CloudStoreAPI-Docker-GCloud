import { Request, Response } from 'express';
import { customerModel } from '../models/Customer.model';

export default class customerController {
  private getCustomersController: any = '';
  private getCustomerController: any = '';
  private createCustomerController: any = '';
  private updateCustomerController: any = '';
  private deleteCustomerController: any = '';

  private Customer = customerModel;

  constructor() {}

  getCustomers() {
    this.getCustomersController = async (req: Request, resp: Response) => {
      try {
        const customers = await this.Customer.find();
        const customerCount = customers.length;

        return resp.json({
          msg: 'Get Customer Controller',
          customers,
          customerCount,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'ERROR in get Customer Method',
          error,
          ok: false,
        });
      }
    };
    return this.getCustomersController;
  }

  getCustomer() {
    this.getCustomerController = async (req: Request, resp: Response) => {
      const { customerId } = req.params;

      try {
        const customerFound = await this.Customer.findById(customerId);

        console.log('customerFound', customerFound);

        if (customerFound === null) {
          return resp.json({
            msg: 'Customer Not Found',
            ok: false,
          });
        }

        return resp.json({
          msg: 'Get Customer',
          customerId,
          customerFound,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'Get Customer Error',
          ok: false,
          error,
        });
      }
    };
    return this.getCustomerController;
  }

  createCustomer() {
    this.createCustomerController = async (req: Request, resp: Response) => {
      const newCustomer = req.body;

      try {
        const customerCreated = await this.Customer.create(newCustomer);

        return resp.json({
          msg: 'Create New Customer',
          customerCreated,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'ERROR in Create Customer Method',
          error,
          ok: false,
        });
      }
    };
    return this.createCustomerController;
  }

  updateCustomer() {
    this.updateCustomerController = async (req: Request, resp: Response) => {
      const { customerId } = req.params;
      const { body } = req;
      try {
        const customerUpdated = await this.Customer.findByIdAndUpdate(customerId, body, {
          new: true,
        });

        return resp.json({
          msg: 'Update Customer',
          customerId,
          customerUpdated,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'Update Customer Error',
          ok: false,
          error,
        });
      }
    };

    return this.updateCustomerController;
  }

  deleteCustomer() {
    this.deleteCustomerController = async (req: Request, resp: Response) => {
      const { customerId } = req.params;
      try {
        const customerDeleted = await this.Customer.findByIdAndDelete(customerId);

        return resp.json({
          msg: 'Delete Customer',
          customerId,
          customerDeleted,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'Delete Customer Error',
          ok: false,
          error,
        });
      }
    };

    return this.deleteCustomerController;
  }
}
