import { NextFunction, Request, Response } from 'express';
import Token from '../libs/token.lib';
import { userModel } from '../models/User.model';

export default class AuthMiddleware {
  private verify: any = '';
  private isAdmin: any = '';
  constructor() {}

  verifyAuth() {
    this.verify = async (req: any, resp: Response, next: NextFunction) => {
      const authToken = req.headers['key-access-token'];
      if (!authToken) return resp.json({ msg: 'UnAuthorized Token' });

      try {
        const decode: any = Token.verifyToken(authToken);
        req.userId = decode.id;
        req.role = decode.role;
        const user = await userModel.findById(req.userId, { password: 0 });

        if (!user) return resp.json({ msg: 'UnAuthorized' });

        next();
      } catch (error) {
        return resp.json({ msg: 'UnAuthorized IToken', error });
      }
    };
    return this.verify;
  }

  isAdminAuth() {
    this.isAdmin = async (req: any, resp: Response, next: NextFunction) => {
      const userRole = req.role;
      console.log('UsrRole', userRole);
      if (userRole === 'admin') {
        next();
        return;
      }
      return resp.json({ msg: 'UnAuthorized IToken' });
    };
    return this.isAdmin;
  }
}

// [this.authMiddleware.verifyAuth(), this.authMiddleware.isAdminAuth()],
