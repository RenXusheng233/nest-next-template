import Next from 'next';
import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import { NODE_ENV } from 'src/shared/constants/env';
import { BlogModule } from './modules/blog/blog.module';
import { HomeModule } from './modules/home/home.module';

@Module({
  /* should pass a NEXT.js server instance
        as the argument to `forRootAsync` */
  imports: [
    RenderModule.forRootAsync(Next({ dev: NODE_ENV === 'development' }), {
      viewsDir: null,
    }),
    HomeModule,
    BlogModule,
  ],
})
export class AppModule {}
