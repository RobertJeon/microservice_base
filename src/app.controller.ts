import { Controller, Get } from '@nestjs/common';
import { AppRepository } from './app.repository';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appRepository: AppRepository) {}

  @MessagePattern('hello')
  async getHello(data: any): Promise<any> {
    const { user_id, password } = data;
    return this.appRepository.getHello(user_id, password);
  }
}
