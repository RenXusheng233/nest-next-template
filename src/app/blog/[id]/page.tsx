import Link from 'next/link';
import { FETCH_BLOG_POST_BY_ID } from 'src/shared/constants/blog-post';
import { BlogPost } from 'src/shared/types/blog-post';
import { fetch } from 'src/shared/utils/fetch';

const Blog = async ({ searchParams }) => {
  const id = searchParams.id;
  const post: BlogPost = await fetch(FETCH_BLOG_POST_BY_ID(id));

  return (
    <div>
      <Link href={'/blog'}>Home</Link>
      <h1>Blog {post.title}</h1>
    </div>
  );
};

export default Blog;
