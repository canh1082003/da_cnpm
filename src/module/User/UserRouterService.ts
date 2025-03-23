import { KhachHang } from '@/databases/entities/User';

class UserRouterService {
  async findUserByEmail(email: string) {
    return await KhachHang.findOne({ where: { email } });
  }
  async register(name: string, email: string, password: string) {
    const user = KhachHang.create({
      name,
      email,
      password,
    });

    return await user.save();
  }
  async getAllUser() {
    return await KhachHang.find();
  }
  async findUserById(id: number) {
    return await KhachHang.findOne({ where: { id } });
  }
  async updateUserById(id: number, updateData: Partial<KhachHang>) {
    const userId = await KhachHang.findOne({ where: { id } });
    if (!userId) {
      throw new Error('Không tìm thấy khách hàng');
    }
    Object.assign(userId, updateData);
    return await userId?.save();
  }
}
export default new UserRouterService();
