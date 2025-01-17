import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as rTracer from 'cls-rtracer';
async function bootstrap() {
   const app = await NestFactory.create(AppModule,{
    cors: true,
    bufferLogs: true
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
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
