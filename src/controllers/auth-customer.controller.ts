import { Request, Response } from 'express';
import Token from '../libs/token.lib';
import { customerModel } from './../models/Customer.model';

export default class AuthController {
  private static loginController: any = '';
  private static registerController: any = '';

  private static Customer = customerModel;
  constructor() {}

  static login() {
    this.loginController = async (req: Request, resp: Response) => {
      const { email, password, roles } = req.body;

      console.log(req.body);

      try {
        // Customer?
        const customerExist = await this.Customer.findOne({ email: email });
        if (customerExist === null) {
          return resp.json({
            msg: '*Wrong credentials*',
            ok: true,
          });
        }
        // PASSWORD?
        const oKPassword = customerExist.comparePassword(password, customerExist.password);

        if (!oKPassword) {
          return resp.json({
            msg: '**Wrong credentials**',
            ok: true,
          });
        }

        if (customerExist.rolename !== 'customer') {
          return resp.json({
            msg: '**NotAuthorized**',
            ok: false,
          });
        }

        // CUSTOMER LOGGED SUCCESS; GetToken
        const token = Token.getToken({
          id: customerExist._id,
          name: customerExist.name,
          email: customerExist.email,
          role: customerExist.rolename,
        });

        return resp.json({
          msg: 'Login Success',
          token,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'Login Error',
          error,
          ok: false,
        });
      }
    };
    return this.loginController;
  }

  static register() {
    this.registerController = async (req: Request, resp: Response) => {
      const { name, email, password, address, phone, location } = req.body;

      // CREATE NewUserData
      const newCustomer = new this.Customer();
      newCustomer.name = name;
      newCustomer.email = email;
      newCustomer.password = newCustomer.encryptPassword(password);
      newCustomer.address = address;
      newCustomer.phone = phone;
      newCustomer.location = location;
      newCustomer.status = true;
      newCustomer.rolename = 'customer';

      // TRY REGISTER
      try {
        const userRegistred = await newCustomer.save();
        return resp.json({
          msg: 'Register',
          userRegistred,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'Register error',
          error,
          ok: false,
        });
      }
    };
    return this.registerController;
  }
}
