import { Router } from 'express';
import UserRouterController from './UserRouterController';
const UserRouter = Router();
UserRouter.post('/register', UserRouterController.register);
UserRouter.post('/login', UserRouterController.login);
UserRouter.get('/all', UserRouterController.getAllUser);
UserRouter.put('/updateUser/:id', UserRouterController.UpdateUserById);
UserRouter.delete('/:id', UserRouterController.getUserById);
export default UserRouter;
