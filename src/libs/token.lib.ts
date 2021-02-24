import jwt from 'jsonwebtoken';

export default class Token {
  constructor() {}

  static getToken(data: {}) {
    const token = jwt.sign(data, `${process.env.JWT_KEY}`, { expiresIn: 86400 });
    return token;
  }

  static verifyToken(token: any) {
    return jwt.verify(token, `${process.env.JWT_KEY}`);
  }
}
