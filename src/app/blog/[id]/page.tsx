import Link from 'next/link';
import { BlogPost } from 'src/shared/graphql/types';
import { request } from 'src/shared/utils/request';
import { GET_BLOG_POST_BY_ID } from 'src/shared/graphql/queries/blog/blog';

const Blog = async ({ params }: { params: { id: string } }) => {
  const post: { getBlogPostById: BlogPost } = await request(
    GET_BLOG_POST_BY_ID,
    {
      input: { id: params.id },
    },
  );

  return (
    <div>
      <Link href={'/blog'}>Home</Link>
      <h1>Blog {post?.getBlogPostById?.title}</h1>
    </div>
  );
};

export default Blog;
