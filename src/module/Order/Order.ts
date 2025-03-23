import { DonHang } from '@/databases/entities/Order';
import { ChiTietDonHang } from '@/databases/entities/OrderDetails';
import { SanPham } from '@/databases/entities/Product';

class Order {
  async Order(orderArray: ChiTietDonHang[]) {
    if (!orderArray) {
      throw new Error('Invalid order items');
    }
    return await Promise.all(
      orderArray.map(async (item) => {
        const { productId, quantity } = item;
        const product = await SanPham.findOne({ where: { id: productId } });
        if (!product) {
          throw new Error("Can't not found product");
        }
        return {
          product: {
            quantity,
          },
        };
      })
    );
  }
  async createOrderItem(
    order: DonHang,
    productId: number,
    quantity: number,
    name: string,
    price: number
  ) {
    try {
      const orderItem = ChiTietDonHang.create({
        orderId: order.id,
        productId,
        quantity,
        name,
        price,
      });

      return await orderItem.save();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createOrder(customerId: number, orderArray: ChiTietDonHang[]) {
    let totalPrice = 0;
    const orderItems: ChiTietDonHang[] = [];

    for (const item of orderArray) {
      const { quantity } = item;
      // eslint-disable-next-line no-await-in-loop
      const product = await SanPham.findOne({ where: { id: item.productId } });
      if (!product) {
        throw new Error('Product Not Found');
      }
      totalPrice += product.price * quantity;
    }
    const firstProduct = await SanPham.findOne({
      where: { id: orderArray[0].productId },
    });
    if (!firstProduct) {
      throw new Error('Sản phẩm không tồn tại');
    }
    const order = DonHang.create({
      customerId,
      total_amount: totalPrice,
      status: 'pending',
      location: 'Đơn hàng kho phân loại HN SOC',
      created_at: new Date(),
      updated_at: new Date(),
    });

    await order.save();

    for (const item of orderArray) {
      // eslint-disable-next-line no-await-in-loop
      const product = await SanPham.findOne({ where: { id: item.productId } });
      if (!product) {
        throw new Error(`Product with ID ${item.productId} not found`);
      }
      // eslint-disable-next-line no-await-in-loop
      const createdOrderItem = await this.createOrderItem(
        order,
        item.productId,
        item.quantity,
        product.name,
        product.price
      );
      orderItems.push(createdOrderItem);
    }

    return {
      orderDetails: order,
      orderItem: orderItems,
    };
  }
}
export default new Order();
