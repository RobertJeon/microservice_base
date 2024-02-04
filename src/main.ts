import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

const microServiceOptions = {
  transport: Transport.TCP,
  options: {
    host: process.env.MICROSERVICE_SERVDR_HOST || 'localhost',
    port: process.env.MICROSERVICE_SERVDR_PORT || 5000,
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    microServiceOptions,
  );
  await app.listen();
}
bootstrap();
