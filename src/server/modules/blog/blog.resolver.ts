import { Observable } from 'rxjs';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { BlogPost, GetBlogInput } from './blog.entity';
import { BlogService } from './blog.service';

@Resolver()
export class BlogResolver {
  constructor(private readonly blogService: BlogService) {}

  @Query(() => [BlogPost])
  listBlogPosts(): Observable<BlogPost[]> {
    try {
      return this.blogService.getBlogPosts();
    } catch (error) {
      throw error;
    }
  }

  @Query(() => BlogPost)
  getBlogPostById(@Args('input') input: GetBlogInput) {
    try {
      return this.blogService.getBlogPost(input);
    } catch (error) {
      throw error;
    }
  }
}
