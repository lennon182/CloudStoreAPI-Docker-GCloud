import { Request, Response } from 'express';
import { rolModel } from '../models/Rol.model';

export default class rolController {
  private getRolesController: any = '';
  //   private getUserController: any = '';
  private createRolController: any = '';
  private updateRolController: any = '';
  //   private deleteUserController: any = '';
  private Rol = rolModel;

  constructor() {}

  getRoles() {
    this.getRolesController = async (req: Request, resp: Response) => {
      try {
        const users = await this.Rol.find();
        const usersCount = users.length;

        return resp.json({
          msg: 'Get Roles Controller',
          users,
          usersCount,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'ERROR in get Role Method',
          error,
          ok: false,
        });
      }
    };
    return this.getRolesController;
  }

  createRole() {
    this.createRolController = async (req: Request, resp: Response) => {
      const { body } = req;

      try {
        const userCreated = await this.Rol.create(body);

        return resp.json({
          msg: 'Create New Role',
          userCreated,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'ERROR in Create Role Method',
          error,
          ok: false,
        });
      }
    };
    return this.createRolController;
  }

  updateRoll() {
    this.updateRolController = async (req: Request, resp: Response) => {
      const { rollId } = req.params;
      const { body } = req;

      console.log(body);

      try {
        const rollUpdate = await this.Rol.findByIdAndUpdate(rollId, body, {
          new: true,
        });

        return resp.json({
          msg: 'Update Roll',
          rollId,
          rollUpdate,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'Update Roll Error',
          ok: false,
          error,
        });
      }
    };

    return this.updateRolController;
  }
}
