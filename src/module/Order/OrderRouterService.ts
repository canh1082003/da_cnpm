import { DonHang } from '@/databases/entities/Order';

class OrderRouterService {
  async findOrderByOrdercode(orderCode: string) {
    return await DonHang.findOne({ where: { orderCode } });
  }
  async updateOrderByOrderCode(orderCode: string, updata: Partial<DonHang>) {
    const order = await DonHang.findOne({ where: { orderCode } });
    if (!order) {
      throw new Error('Order Not Found');
    }
    Object.assign(order, updata);
    return await order?.save();
  }
  async getAllOrder() {
    return await DonHang.find();
  }
  async addOrderByStaff(shipperId: number, id: number) {
    const order = await DonHang.findOne({
      where: {
        id,
        status: 'pending',
      },
    });

    if (!order) {
      throw new Error('Đơn hàng không tồn tại hoặc đã được nhận');
    }
    order.shipperId = shipperId;
    order.status = 'processing';
    return await order.save();
  }
  async getOrderByStatus() {
    return await DonHang.find({ where: { status: 'pending' } });
  }
  async getOrderAllByAddShipper(shipperId: number) {
    return await DonHang.find({ where: { shipperId } });
  }
}

export default new OrderRouterService();
