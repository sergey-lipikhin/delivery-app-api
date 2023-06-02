import { Good } from '../models/goods';

const getAll = async(): Promise<Good[]> => (
  Good.findAll()
);

export default {
  getAll,
};
