import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from 'src/shared/constants/env';
import { IgnoreFaviconMiddleware } from './common/middlewares/ignore-favicon';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule.initialize());
  app.use(IgnoreFaviconMiddleware);
  await app.listen(PORT);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
