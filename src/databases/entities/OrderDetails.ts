import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { DonHang } from './Order';
import { SanPham } from './Product';

@Entity('ChiTietDonHang')
export class ChiTietDonHang extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { type: 'bigint', unsigned: true })
  id: number;

  @Column({ type: 'bigint', unsigned: true, nullable: false })
  orderId: number;

  @ManyToOne(() => DonHang, (dh) => dh.chiTietDonHangs, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'orderId' })
  donHang: DonHang;

  @Column({ type: 'varchar', length: 50, nullable: false })
  name: string;

  @Column({ type: 'bigint', unsigned: true, nullable: false })
  productId: number;

  @ManyToOne(() => SanPham, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'productId' })
  sanPham: SanPham;

  @Column({ type: 'int', nullable: false })
  quantity: number;

  @Column({ type: 'decimal', precision: 8, scale: 2, nullable: false })
  price: number;
}
