import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //remueve propiedades que no esten definidas en el dto
      forbidNonWhitelisted: true, //lanza un error si se envia una propiedad no definida en el dto
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
