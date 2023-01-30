import { Controller, Get, Render, Param, ParseIntPipe } from '@nestjs/common';
import { UseInterceptors } from '@nestjs/common';
import { BlogService } from './blog.service';
import { ParamsInterceptor } from '../../common/interceptors/params.interceptor';
import {
  FETCH_BLOG_POSTS_PREFIX,
  FETCH_BLOG_POSTS,
} from 'src/shared/constants/blog-post';

@Controller()
export class BlogController {
  constructor(private readonly appService: BlogService) {}

  @Get('/blog')
  @Render('/blog')
  @UseInterceptors(ParamsInterceptor)
  public blogList() {
    return {};
  }

  @Get('/blog/:id')
  @Render('/blog/[id]')
  @UseInterceptors(ParamsInterceptor)
  public blogPost() {
    return {};
  }

  @Get(FETCH_BLOG_POSTS)
  public listBlogPosts() {
    return this.appService.getBlogPosts();
  }

  @Get(`${FETCH_BLOG_POSTS_PREFIX}/:id`)
  public getBlogPostById(@Param('id', new ParseIntPipe()) id: number) {
    return this.appService.getBlogPost({ id });
  }
}
