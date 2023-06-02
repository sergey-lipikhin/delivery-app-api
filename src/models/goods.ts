import {
  AllowNull,
  Column,
  Model,
  Table,
  ForeignKey,
} from 'sequelize-typescript';
import { DataTypes, Optional } from 'sequelize';
import { IGood } from '../types/IGood';
import { Store } from './stores';

interface GoodAttributes extends IGood {
  id: string;
}

interface GoodCreationAttributes
  extends Optional<GoodAttributes, 'id'> {}

@Table({
  tableName: 'goods',
  timestamps: false,
})
export class Good
  extends Model<GoodAttributes, GoodCreationAttributes> {
  @ForeignKey(() => Store)
  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER,
  })
    storeId: number;

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
    price: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    screen: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    capacity: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    ram: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    image: string;
}
