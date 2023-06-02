import { Sequelize } from 'sequelize-typescript';
import configs from '../configs';
import {
  checkInstanceOfSequelizeConfigRemote,
} from '../helpers/checkInstanceOfSequelizeConfigRemote';

export const initDb = async() => {
  const env = process.env.NODE_ENV || 'development';
  const config = configs[env];

  const sequelize = checkInstanceOfSequelizeConfigRemote(config)
    ? new Sequelize(config.uri, config.options)
    : new Sequelize(config.database,
      config.username, config.password, config.options);

  try {
    sequelize.authenticate({ logging: false });
    global.console.log('Connection to db has been established successfully.');
  } catch (error) {
    global.console.error('Unable to connect to the database:', error);
  }

  return sequelize;
};

initDb();
