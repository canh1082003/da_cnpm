import OrderRouter from '@/module/Order';
import ProductRouter from '@/module/Product';
import UserRouter from '@/module/User';
import { Router } from 'express';
const router = Router();

router.use('/user', UserRouter);
router.use('/product', ProductRouter);
router.use('/order', OrderRouter);
export default router;
