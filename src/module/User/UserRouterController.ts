import { NextFunction, Request, Response } from 'express';
import UserRouterService from './UserRouterService';

class UserRouterController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password, confirmPassword } = req.body;
      const userExist = await UserRouterService.findUserByEmail(email);
      if (userExist) {
        return res.status(409).json({
          message: 'Email này đã tồn tại',
        });
      }
      if (confirmPassword !== password) {
        if (confirmPassword) {
          return res.status(400).json({
            message: 'Mật Khẩu Không Khớp',
          });
        }
      }
      if (password.length < 6) {
        return res.status(400).json({
          message: 'Mật khẩu phải đủ 6 kí tự',
        });
      }
      const user = await UserRouterService.register(name, email, password);
      return res.status(200).json({
        message: 'Đăng Ký Thành Công',
        data: user,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const user = await UserRouterService.findUserByEmail(email);
      if (!user) {
        return res.status(404).json({
          message: 'Email không tồn tại',
        });
      }
      if (password !== user.password) {
        return res.status(400).json({
          message: 'Mật khẩu sai hãy nhập lại',
        });
      }
      return res.status(200).json({
        message: 'Đăng nhập thành công',
        data: user,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async getAllUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await UserRouterService.getAllUser();
      return res.status(200).json({
        message: 'Lấy tất cả Khách Hàng thành công',
        data: user,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = await UserRouterService.findUserById(Number(id));
      if (!user) {
        return res.status(404).json({
          message: 'Không tìm thấy Khách Hàng này',
        });
      }
      return res.status(200).json({
        message: 'Tìm thấy khách hàng thành công',
        data: user,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async UpdateUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const updateUser = await UserRouterService.updateUserById(
        Number(id),
        updateData
      );
      return res.status(200).json({
        message: 'Cập Nhật thành công',
        data: updateUser,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
export default new UserRouterController();
