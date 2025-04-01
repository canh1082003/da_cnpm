import { Router } from 'express';
import OrderRouterController from './OrderRouterController';
const OrderRouter = Router();
OrderRouter.post('/createOrder', OrderRouterController.createOrder);
OrderRouter.put(
  '/updateOrder/:orderCode',
  OrderRouterController.updateOrderByOrderCode
);
OrderRouter.get(
  '/findOrder/:orderCode',
  OrderRouterController.findOrderByOdercode
);
OrderRouter.get('/all', OrderRouterController.getAllOrder);
OrderRouter.put(
  '/addOrderByStaff/:shipperId',
  OrderRouterController.addOrderByStaff
);
OrderRouter.get('/getOrderByStatus', OrderRouterController.getOrderByStatus);
// có 1 hàm findAllOrder nhưng mà chưa có id nào của staff nhận
// tạo 1 hàm addOrderByStaff khi mà nhận thì add id trên param của staff vào order
export default OrderRouter;
