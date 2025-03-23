import { Router } from 'express';
import ProductRouterController from './ProductRouterController';
const ProductRouter = Router();
ProductRouter.post('/create', ProductRouterController.createProduct);
ProductRouter.delete('/delete/:id', ProductRouterController.deleteProductById);
ProductRouter.get('/all', ProductRouterController.getAllProduct);
ProductRouter.get('/:id', ProductRouterController.getProductById);
export default ProductRouter;
