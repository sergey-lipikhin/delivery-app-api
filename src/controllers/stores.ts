import { Request, Response } from 'express';
import storeService from '../services/store';

export const getAll = async(req: Request, res: Response) => {
  const stores = await storeService.getAll();

  res.send(stores);
};

export default {
  getAll,
};
