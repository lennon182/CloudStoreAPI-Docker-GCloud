import { Request, Response } from 'express';
import { shopModel } from '../models/Shop.model';

export default class shopController {
  private getShopInfoController: any = '';
  private setShopInfoController: any = '';

  private Shop = shopModel;

  constructor() {}

  getShopInfo() {
    this.getShopInfoController = async (req: Request, resp: Response) => {
      const { shopId } = req.params;

      try {
        const shopInfo = await this.Shop.findById(shopId);

        console.log('ShopInfo', shopInfo);

        if (shopInfo === null) {
          return resp.json({
            msg: 'No info Shop yet',
            ok: false,
          });
        }

        return resp.json({
          msg: 'Shop Info',
          shopId,
          shopInfo,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'Get Shop Info Error',
          ok: false,
          error,
        });
      }
    };
    return this.getShopInfoController;
  }

  setShopInfo() {
    this.setShopInfoController = async (req: Request, resp: Response) => {
      const shopInfo = req.body;

      try {
        const settingShop = await this.Shop.create(shopInfo);

        return resp.json({
          msg: 'Setting Info Shop',
          settingShop,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'ERROR ',
          error,
          ok: false,
        });
      }
    };
    return this.setShopInfoController;
  }
}
