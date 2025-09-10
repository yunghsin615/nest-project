import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { dtoValidationPipe } from './base/validation/validation.pipe';
import { setupSwagger } from './base/swagger/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('webapi');

  // HERE
  app.useGlobalPipes(dtoValidationPipe);

  setupSwagger(app);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
