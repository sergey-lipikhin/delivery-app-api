import {
  AllowNull,
  Column,
  Model,
  Table,
  HasMany,
} from 'sequelize-typescript';
import { DataTypes, Optional } from 'sequelize';
import { IStore } from '../types/IStore';
import { Good } from './goods';

interface StoreAttributes extends IStore {
  id: string;
}

interface StoreCreationAttributes
  extends Optional<StoreAttributes, 'id'> {}

@Table({
  tableName: 'stores',
  timestamps: false,
})
export class Store
  extends Model<StoreAttributes, StoreCreationAttributes> {
  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    name: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    slug: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    link: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    phrase: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    image: string;

  @HasMany(() => Good)
    goods: Good[];
}
