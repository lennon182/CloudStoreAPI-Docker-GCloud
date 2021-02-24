import express from 'express';

export default class Server {
  app: express.Application;
  private port: number = 0;

  constructor() {
    this.port = parseInt(`${process.env.PORT}`) || 3000;
    this.app = express();
  }

  startSever(cb: Function) {
    this.app.listen(this.port, cb(this.port));
  }
}
