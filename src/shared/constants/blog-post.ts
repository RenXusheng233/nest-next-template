export const FETCH_BLOG_POSTS_PREFIX = '/api/blog-posts';

export const FETCH_BLOG_POSTS = FETCH_BLOG_POSTS_PREFIX;

export const FETCH_BLOG_POST_BY_ID = (id: string) =>
  `${FETCH_BLOG_POSTS_PREFIX}/${id}`;
