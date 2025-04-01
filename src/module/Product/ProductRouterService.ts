import { SanPham } from '@/databases/entities/Product';

class ProductRouterService {
  async createProduct(name: string, price: number) {
    const product = SanPham.create({
      name,
      price,
    });
    return await product.save();
  }
  async getAllProduct() {
    return await SanPham.find();
  }
  async deleteProductById(id: number) {
    const userId = await SanPham.findOne({ where: { id } });
    return await userId?.remove();
  }
  async getProductById(id: number) {
    const product = await SanPham.findOne({ where: { id } });
    if (!product) {
      throw new Error('Không tìm thấy sản phẩm');
    }
    return product;
  }
  async updateProductById(id: number, updateData: Partial<SanPham>) {
    const product = await SanPham.findOne({ where: { id } });
    if (!product) {
      throw new Error('Không Tìm thấy sản phẩm');
    }
    Object.assign(product, updateData);
    return await product.save();
  }
}
export default new ProductRouterService();
