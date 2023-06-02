import dotenv from 'dotenv';
import {
  SequelizeConfig,
  SequelizeConfigLocal,
  SequelizeConfigRemote,
} from './types/SequelizeConfig';

dotenv.config();

const developmentConfig: SequelizeConfigLocal = {
  database: process.env.DB_NAME || 'postgres',
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'wrong password',
  options: {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: false,
  },
};

const productionConfig: SequelizeConfigRemote = {
  uri: process.env.DB_URI || 'there should be uri to db',
  options: {
    dialectOptions: {
      ssl: true,
    },
  },
};

const sequlizeConfig: SequelizeConfig = {
  development: developmentConfig,
  production: productionConfig,
};

export default sequlizeConfig;
