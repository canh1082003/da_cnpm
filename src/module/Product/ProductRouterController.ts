import { NextFunction, Request, Response } from 'express';
import ProductRouterService from './ProductRouterService';

class ProductRouterController {
  async createProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, price } = req.body;
      const product = await ProductRouterService.createProduct(name, price);
      return res.status(200).json({
        message: 'Tạo sản phẩm thành công',
        data: product,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async deleteProductById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await ProductRouterService.deleteProductById(Number(id));
      return res.status(200).json({
        message: 'Xóa sản phẩm Thành Công',
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async getAllProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await ProductRouterService.getAllProduct();
      return res.status(200).json({
        message: 'Lấy tất cả sản phẩm thành công',
        data: product,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async getProductById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const product = await ProductRouterService.getProductById(Number(id));
      return res.status(200).json({
        message: 'Lấy Sản Phẩm thành công',
        data: product,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async updateProductById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const product = await ProductRouterService.updateProductById(
        Number(id),
        updateData
      );
      return res.status(200).json({
        message: 'Cập Nhật Sản Phẩm Thành Công',
        data: product,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
export default new ProductRouterController();
