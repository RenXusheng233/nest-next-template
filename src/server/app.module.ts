import Next from 'next';
import { join } from 'path';
import { Module, DynamicModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { RenderModule } from 'nest-next';
import { NODE_ENV } from 'src/shared/constants/env';
import { BlogModule } from './modules/blog/blog.module';
import { HomeModule } from './modules/home/home.module';

declare const module: any;

@Module({})
export class AppModule {
  public static initialize(): DynamicModule {
    const graphqlModule = GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: () => ({
        debug: NODE_ENV === 'development',
        playground: NODE_ENV === 'development',
        autoSchemaFile: true,
        definitions: {
          path: join(process.cwd(), 'src/shared/graphql/types.ts'),
        },
      }),
    });

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
      imports: [graphqlModule, renderModule, BlogModule, HomeModule],
    };
  }
}
