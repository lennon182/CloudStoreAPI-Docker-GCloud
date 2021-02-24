import { Request, Response } from 'express';
import Token from '../libs/token.lib';
import { userModel } from './../models/User.model';

export default class AuthController {
  private static loginController: any = '';
  private static registerController: any = '';

  private static User = userModel;
  constructor() {}

  static login() {
    this.loginController = async (req: Request, resp: Response) => {
      const { email, password, roles } = req.body;

      // console.log(req.body);

      try {
        // USER?
        const userExist = await this.User.findOne({ email: email });
        if (userExist === null) {
          return resp.json({
            msg: '*Wrong credentials*',
            ok: true,
          });
        }
        // PASSWORD?
        const oKPassword = userExist.comparePassword(password, userExist.password);

        if (!oKPassword) {
          return resp.json({
            msg: '**Wrong credentials**',
            ok: true,
          });
        }

        if (userExist.rolename !== 'admin') {
          return resp.json({
            msg: '**NotAuthorized**',
            ok: false,
          });
        }

        // USER LOGGED SUCCESS; GetToken
        const token = Token.getToken({
          id: userExist._id,
          name: userExist.name,
          email: userExist.email,
          role: userExist.rolename,
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
      const { name, email, password, address, phone, location, shipping, logo } = req.body;

      // CREATE NewUserData
      const newUser = new this.User();
      newUser.name = name;
      newUser.email = email;
      newUser.password = newUser.encryptPassword(password);
      newUser.status = true;
      newUser.rolename = 'admin';

      // TRY REGISTER
      try {
        const userRegistred = await newUser.save();
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
