import { Request, Response } from 'express';
import goodService from '../services/good';

export const getAll = async(req: Request, res: Response) => {
  const goods = await goodService.getAll();

  res.send(goods);
};

export default {
  getAll,
};
