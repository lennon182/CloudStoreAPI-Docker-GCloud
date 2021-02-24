import mongoose from 'mongoose';

export default class DbConnection {
  private URI_DB: string = `${process.env.DB_URI}`;
  constructor() {
    this.dbStart();
  }

  async dbStart() {
    mongoose
      .connect(`${this.URI_DB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .catch((e) => {
        console.log(`ERRROR, DB no connected...`, e.message);
        return;
      })
      .then((connected) => {
        console.log(`DB is Connected...`);
        return;
      });
  }
}
