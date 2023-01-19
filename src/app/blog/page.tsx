import Link from 'next/link';
import { FETCH_BLOG_POSTS } from 'src/shared/constants/blog-post';
import { BlogPost } from 'src/shared/types/blog-post';
import { fetch } from 'src/shared/utils/fetch';

const Home = async () => {
  const blogPosts: BlogPost[] = await fetch(FETCH_BLOG_POSTS);

  return (
    <div>
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
