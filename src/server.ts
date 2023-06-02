import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initDb } from './database/initDb';
import { getAll as getAllStores } from './controllers/stores';
import { getAll as getAllGoods } from './controllers/goods';
import { Store } from './models/stores';
import { Good } from './models/goods';

dotenv.config();

const PORT = Number(process.env.PORT) || 3000;

const STORES_ENDPOINT = '/stores';
const GOODS_ENDPOINT = '/goods';

const server = express();

server.use(cors());
server.use(express.static('public'));

const sequelize = await initDb();

sequelize.addModels([Store, Good]);

server.listen(PORT, '0.0.0.0', () => {
  global.console.log(`Server is running on PORT = ${PORT}`);
});

server.get(STORES_ENDPOINT, express.json(), getAllStores);
server.get(GOODS_ENDPOINT, express.json(), getAllGoods);
