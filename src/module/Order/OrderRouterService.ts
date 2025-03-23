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
}

export default new OrderRouterService();
