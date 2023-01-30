import Next from 'next';
import { Module, DynamicModule } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import { NODE_ENV } from 'src/shared/constants/env';
import { BlogModule } from './modules/blog/blog.module';
import { HomeModule } from './modules/home/home.module';

declare const module: any;

@Module({})
export class AppModule {
  public static initialize(): DynamicModule {
    /* during initialization attempt pulling cached RenderModule
            from persisted data */
    const renderModule =
      module.hot?.data?.renderModule ??
      RenderModule.forRootAsync(Next({ dev: NODE_ENV === 'development' }), {
        viewsDir: null,
      });

    if (module.hot) {
      /* add a handler to cache RenderModule
                before disposing existing module */
      module.hot.dispose((data: any) => {
        data.renderModule = renderModule;
      });
    }

    return {
      module: AppModule,
      imports: [renderModule, BlogModule, HomeModule],
    };
  }
}
