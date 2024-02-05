import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppRepository } from './app.repository';
import { ConfigModule } from '@nestjs/config';
import { MysqlModule } from './mysql/mysql.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MysqlModule,
  ],
  controllers: [AppController],
  providers: [AppRepository],
})
export class AppModule {}
