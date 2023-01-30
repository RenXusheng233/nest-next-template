import Link from 'next/link';
import { fetch } from 'src/shared/utils/fetch';
import { BlogPost } from 'src/shared/graphql/types';
import { FETCH_BLOG_POSTS } from 'src/shared/constants/blog-post';

const Home = async () => {
  const blogPosts: BlogPost[] = await fetch(FETCH_BLOG_POSTS);

  return (
    <div>
      <Link href={'/'}>Back</Link>
      <h1>Blog Home</h1>
      {blogPosts.map(({ title, id }) => (
        <div key={id}>
          <Link href={`/blog/${id}`}>{title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
