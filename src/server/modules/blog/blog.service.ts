import { Injectable, NotFoundException } from '@nestjs/common';
import { from, Observable, of, toArray } from 'rxjs';
import { BlogPost, GetBlogInput } from './blog.entity';

const BLOG_POSTS = [
  { title: 'Lorem Ipsum', id: 1 },
  { title: 'Dolore Sit', id: 2 },
  { title: 'Ame', id: 3 },
];

@Injectable()
export class BlogService {
  getBlogPosts(): Observable<BlogPost[]> {
    return from(BLOG_POSTS).pipe(toArray());
  }

  getBlogPost(params: GetBlogInput): Observable<BlogPost> | NotFoundException {
    const blogPost = BLOG_POSTS.find(({ id }) => id === params.id);

    if (!blogPost) {
      return new NotFoundException();
    }

    return of(blogPost);
  }
}
