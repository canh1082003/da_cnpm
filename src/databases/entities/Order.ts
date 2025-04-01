import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';
import { KhachHang } from './User';
import { ChiTietDonHang } from './OrderDetails';
import { v4 as uuidv4 } from 'uuid';

@Entity('DonHang')
export class DonHang extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { type: 'bigint', unsigned: true })
  id: number;

  @Column({ type: 'bigint', unsigned: true, nullable: false })
  customerId: number;

  @ManyToOne(() => KhachHang, (kh) => kh.donHangs, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'customerId' })
  khachHang: KhachHang;

  @Column({
    type: 'enum',
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending',
    nullable: false,
  })
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

  @Column({
    type: 'enum',
    enum: [
      'Đơn hàng kho phân loại HN SOC',
      'Đơn hàng đang được trung chuyển tới Da Nang SOC',
      'Đơn hàng đã đến kho phân loại Da Nang SOC',
      'Đơn hàng đang trên đường giao đến bạn',
      'Đơn hàng đã được giao thành công',
    ],
    nullable: false,
  })
  location: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @Column({ type: 'decimal', precision: 12, scale: 2, nullable: false })
  total_amount: number;

  @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
  orderCode: string;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  shipperId: number;

  @OneToMany(() => ChiTietDonHang, (ctdh) => ctdh.donHang)
  chiTietDonHangs: ChiTietDonHang[];

  @BeforeInsert()
  generateOrderCode() {
    this.orderCode = `${uuidv4().slice(0, 8)}${uuidv4().slice(-2)}`;
  }
}
