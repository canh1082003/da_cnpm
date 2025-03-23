// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   BaseEntity,
//   ManyToOne,
//   JoinColumn,
// } from 'typeorm';
// import { DonHang } from './Order';

// @Entity('LichSuTrangThai')
// export class LichSuTrangThai extends BaseEntity {
//   @PrimaryGeneratedColumn('increment', { type: 'bigint', unsigned: true })
//   id: number;

//   @Column({ type: 'bigint', unsigned: true, nullable: false })
//   orderId: number;

//   @ManyToOne(() => DonHang, (dh) => dh.lichSuTrangThais, {
//     onDelete: 'CASCADE',
//   })
//   @JoinColumn({ name: 'orderId' })
//   donHang: DonHang;

//   @Column({
//     type: 'enum',
//     enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
//     nullable: false,
//   })
//   status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

//   @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
//   changed_at: Date;
// }
// //
