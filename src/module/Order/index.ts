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
OrderRouter.get(
  '/getOrderAllByAddShipper/:shipperId',
  OrderRouterController.getOrderAllByAddShipper
);
export default OrderRouter;
