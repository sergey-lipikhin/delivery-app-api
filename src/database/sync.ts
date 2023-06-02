import { initDb } from './initDb';
import { readGoods, readStores } from '../helpers/readJson';
import { IStore } from '../types/IStore';
import { Store } from '../models/stores';
import { Good } from '../models/goods';
import { IGood } from '../types/IGood';

const syncDb = async() => {
  global.console.log('START');

  const stores: Readonly<IStore>[] = readStores();
  const goods: Readonly<IGood>[] = readGoods();

  const sequelize = await initDb();

  sequelize.addModels([Store, Good]);

  await Store.sync({ force: true });
  await Good.sync({ force: true });

  Store.bulkCreate(stores)
    .then(() => global.console.log('Data inserted into database'))
    .catch((err) => global.console.error('Error inserting data:', err));

  Good.bulkCreate(goods)
    .then(() => global.console.log('Data inserted into database'))
    .catch((err) => global.console.error('Error inserting data:', err));

  global.console.log('Tables succesfully synchronized');
};

syncDb();
