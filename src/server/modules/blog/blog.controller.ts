import { Controller, Get, Render } from '@nestjs/common';
import { UseInterceptors } from '@nestjs/common';
import { BlogService } from './blog.service';
import { QueryInterceptor } from '../../common/interceptors/query.interceptor';

@Controller()
export class BlogController {
  constructor(private readonly appService: BlogService) {}

  @Get('/blog')
  @Render('/blog')
  @UseInterceptors(QueryInterceptor)
  public blogList() {
    return {};
  }

  @Get('/blog/:id')
  @Render('/blog/[id]')
  @UseInterceptors(QueryInterceptor)
  public blogPost() {
    return {};
  }
}
