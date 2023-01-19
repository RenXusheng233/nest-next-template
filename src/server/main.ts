import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from 'src/shared/constants/env';
import { IgnoreFaviconMiddleware } from './common/middlewares/ignore-favicon';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(IgnoreFaviconMiddleware);
  await app.listen(PORT);
}
bootstrap();
