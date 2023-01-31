import Link from 'next/link';
import { fetch } from 'src/shared/utils/fetch';
import { BlogPost } from 'src/shared/graphql/types';
import { FETCH_BLOG_POST_BY_ID } from 'src/shared/constants/blog-post';

const Blog = async ({ params }: { params: { id: string } }) => {
  const post: BlogPost = await fetch(FETCH_BLOG_POST_BY_ID(params.id));

  return (
    <div>
      <Link href={'/blog'}>Home</Link>
      <h1>Blog {post.title}</h1>
    </div>
  );
};

export default Blog;
