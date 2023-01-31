import Link from 'next/link';
import { BlogPost } from 'src/shared/graphql/types';
import { request } from 'src/shared/utils/request';
import { GET_LIST_BLOG_POSTS } from 'src/shared/graphql/queries/blog/blog';

const Home = async () => {
  const blogPosts: { listBlogPosts: BlogPost[] } = await request(
    GET_LIST_BLOG_POSTS,
  );

  return (
    <div>
      <Link href={'/'}>Back</Link>
      <h1>Blog Home</h1>
      {blogPosts?.listBlogPosts?.map(({ title, id }) => (
        <div key={id}>
          <Link href={`/blog/${id}`}>{title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
