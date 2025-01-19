import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as rTracer from 'cls-rtracer';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
async function bootstrap() {
   const app = await NestFactory.create(AppModule,{
    cors: true,
    bufferLogs: true
  });
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://admin:admin@rabbitmq:5672'],
      queue: 'transaction-queeue',
      queueOptions: {
        durable: false
      }
    }
  });
  
  app.useGlobalPipes(new ValidationPipe({ forbidUnknownValues: true, forbidNonWhitelisted: true, whitelist: true }));
  app.use(rTracer.expressMiddleware());
  app.enableShutdownHooks();

  const swaggerconfig = new DocumentBuilder()
    .setTitle('Payment API')
    .setDescription('Payment API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerconfig);
  SwaggerModule.setup('', app, document);
  await app.startAllMicroservices();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
