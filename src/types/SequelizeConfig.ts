import { SequelizeOptions } from 'sequelize-typescript';

export interface SequelizeConfigLocal {
  database: string,
  username: string,
  password: string,
  options?: SequelizeOptions,
};

export interface SequelizeConfigRemote {
  uri: string,
  options?: SequelizeOptions,
};

export interface SequelizeConfig {
  [key: string]: SequelizeConfigLocal | SequelizeConfigRemote;
}
