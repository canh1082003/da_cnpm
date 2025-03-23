import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { DonHang } from './Order';

@Entity('KhachHang')
export class KhachHang extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { type: 'bigint', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  password: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  phone?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  address?: string;
  @Column({
    type: 'enum',
    enum: ['user', 'admin', 'shipper'],
    default: 'user',
    nullable: false,
  })
  role: 'user' | 'admin';
  @OneToMany(() => DonHang, (donHang) => donHang.khachHang)
  donHangs: DonHang[];
}
