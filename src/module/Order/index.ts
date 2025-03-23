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
export default OrderRouter;
