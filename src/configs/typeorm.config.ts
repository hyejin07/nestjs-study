import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'appuser',
  password: '123456',
  database: 'appdb',
  entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
  synchronize: true,
};
