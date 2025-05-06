import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { dtoValidationPipe } from './base/validation/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // HERE
  app.useGlobalPipes(dtoValidationPipe);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
