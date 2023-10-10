import Link from "next/link";
import groq from "groq";
import { client } from "../client";

interface SanityPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
}

const Index = ({ posts }: {posts: SanityPost[]}) => {
  console.log(posts);
  return (
    <div>
    <h2>Welcome to the front page</h2>
    {posts.length > 0 &&
      posts.map(({ _id, title = '', slug = '', publishedAt = '' }) =>
        slug && typeof slug === "object" && "current" in slug ? (
          <li key={_id}>
            <Link href={`/post/${encodeURIComponent(slug.current)}`}>
              {title}
            </Link>{' '}
            ({new Date(publishedAt).toDateString()})
          </li>
        ) : null
      )}
  </div>
  );
};

export async function getStaticProps() {
  const posts = await client.fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
  `)
  return {
    props: {
      posts
    }
  }
}

export default Index;
