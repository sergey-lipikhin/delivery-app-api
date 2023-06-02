import fs from 'fs';
import { IStore } from '../types/IStore';
import { IGood } from '../types/IGood';

export const readStores = (): Readonly<IStore>[] => (
  JSON.parse(
    fs.readFileSync(
      new URL(
        '../json/stores.json',
        import.meta.url,
      ),
      'utf8',
    ),
  )
);

export const readGoods = (): Readonly<IGood>[] => (
  JSON.parse(
    fs.readFileSync(
      new URL(
        '../json/goods.json',
        import.meta.url,
      ),
      'utf8',
    ),
  )
);
