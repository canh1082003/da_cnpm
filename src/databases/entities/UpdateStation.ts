// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   BaseEntity,
//   ManyToOne,
//   JoinColumn,
// } from 'typeorm';
// import { DonHang } from './Order';

// @Entity('StationStatus')
// export class StationStatus extends BaseEntity {
//   @PrimaryGeneratedColumn('increment', { type: 'bigint', unsigned: true })
//   id: number;

//   @Column({ type: 'bigint', unsigned: true, nullable: false })
//   orderId: number;

//   @ManyToOne(() => DonHang, (dh) => dh.stationStatuses, { onDelete: 'CASCADE' })
//   @JoinColumn({ name: 'orderId' })
//   donHang: DonHang;

//   @Column({
//     type: 'enum',
//     enum: [
//       'Đơn hàng kho phân loại HN SOC',
//       'Đơn hàng đang được trung chuyển tới Da Nang SOC',
//       'Đơn hàng đã đến kho phân loại Da Nang SOC',
//       'Đơn hàng đang trên đường giao đến bạn',
//       'Đơn hàng đã được giao thành công',
//     ],
//     nullable: false,
//   })
//   status:
//     | 'Đơn hàng kho phân loại HN SOC'
//     | 'Đơn hàng đang được trung chuyển tới Da Nang SOC'
//     | 'Đơn hàng đã đến kho phân loại Da Nang SOC'
//     | 'Đơn hàng đang trên đường giao đến bạn'
//     | 'Đơn hàng đã được giao thành công';

//   @Column({ type: 'timestamp', nullable: false })
//   updated_at: Date;
// }
