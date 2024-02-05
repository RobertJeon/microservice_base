import { Injectable } from '@nestjs/common';
import { MysqlService } from './mysql/mysql.service';

@Injectable()
export class AppRepository {
  constructor(private readonly mysqlService: MysqlService) {}

  async getHello(user_id, password): Promise<any> {
    const query = `
            INSERT INTO TB_USER
                (USER_ID, PASSWORD)
            VALUES (?, ?);
        `;
    const params = [user_id, password];
    return await this.mysqlService.query(query, params);
  }
}
