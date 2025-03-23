import { NextFunction, Response, Request } from 'express';

import { ChiTietDonHang } from '@/databases/entities/OrderDetails';
import Order from './Order';
import OrderRouterService from './OrderRouterService';

class OrderRouterController {
  async createOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const { orderArray } = req.body;
      await Order.Order(orderArray as ChiTietDonHang[]);
      const { customerId } = req.body;
      const order = await Order.createOrder(customerId, orderArray);

      return res.status(200).json({
        message: 'Create Order Success',
        data: order,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async findOrderByOdercode(req: Request, res: Response, next: NextFunction) {
    try {
      const { orderCode } = req.params;
      const order = await OrderRouterService.findOrderByOrdercode(orderCode);
      return res.status(200).json({
        message: 'find Order Success',
        data: order,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async updateOrderByOrderCode(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { orderCode } = req.params;
      const updata = req.body;
      const order = await OrderRouterService.updateOrderByOrderCode(
        orderCode,
        updata
      );
      return res.status(200).json({
        message: 'update order Success',
        data: order,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
export default new OrderRouterController();
