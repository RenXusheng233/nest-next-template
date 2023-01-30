import { Observable } from 'rxjs';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { BlogPost, GetBlogInput } from './blog.entity';
import { BlogService } from './blog.service';

@Resolver()
export class BlogResolver {
  constructor(private readonly blogService: BlogService) {}

  @Query(() => [BlogPost])
  listBlogPosts(): Observable<BlogPost[]> {
    return this.blogService.getBlogPosts();
  }

  @Query(() => BlogPost)
  getBlogPostById(@Args('input') input: GetBlogInput) {
    return this.blogService.getBlogPost(input);
  }
}
