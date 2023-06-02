import { Store } from '../models/stores';

const getAll = async(): Promise<Store[]> => (
  Store.findAll()
);

export default {
  getAll,
};
