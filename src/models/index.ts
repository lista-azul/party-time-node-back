import {Sequelize} from 'sequelize-typescript';
import {Event} from "./event";

export {Sequelize} from 'sequelize-typescript';
export {Event} from "./event";

export class Models {

  public sequelize: Sequelize;

  constructor(config: any) {
      this.sequelize = new Sequelize(config);
  }

  public initModels() {
      this.sequelize.addModels(this.getModels());
      return this.sequelize.sync({force: true});
  }

  // TODO Scan models folder to build list
  private getModels() {
      return [
          Event
      ];
  }
}
