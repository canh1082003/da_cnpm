import { DataSource } from 'typeorm';
import envConfig from '../common/config/config';
import { KhachHang } from './entities/User';
import { DonHang } from './entities/Order';
import { ChiTietDonHang } from './entities/OrderDetails';
import { SanPham } from './entities/Product';
class MysqlDatabase {
  uiShopConnection = {
    nameSchema: envConfig.getDbName,
    dataSource: new DataSource({
      host: envConfig.getDbHost,
      port: Number(envConfig.getDbPort),
      username: envConfig.getDbUserName,
      password: envConfig.getDbPassword,
      database: envConfig.getDbName,
      type: 'mysql',
      entities: [KhachHang, DonHang, ChiTietDonHang, SanPham],
    }),
  };

  get getDataSource() {
    return this.uiShopConnection.dataSource;
  }

  async connect() {
    const { dataSource, nameSchema } = this.uiShopConnection;
    try {
      await dataSource.initialize();
      console.log(`Connect to ${nameSchema} successfully! `);
    } catch (error) {
      console.log(error);
      console.log(`Connect to ${nameSchema} failed! `);
    }
  }
}

export default new MysqlDatabase();
