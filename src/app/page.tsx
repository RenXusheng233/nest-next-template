import Link from 'next/link';

const Home = async () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Link href={`/blog`}>Go to Blog</Link>
      <br />
      <br />
      <Link href={`/three`}>Go to Three</Link>
    </div>
  );
};

export default Home;
