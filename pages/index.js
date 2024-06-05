import FeaturedPosts from '@/components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { Fragment } from 'react';

const DUMMY_POSTS = [
  { slug: 'getting-started-with-nextjs1',
  title: 'getting-started-with-nextjs',
  image: 'getting-started-with-nextjs.png',
  excerpt: 'getting-started-with-nextjs',
  date: '2024-06-05' },
  { slug: 'getting-started-with-nextjs2',
  title: 'getting-started-with-nextjs',
  image: 'getting-started-with-nextjs.png',
  excerpt: 'getting-started-with-nextjs',
  date: '2024-06-05' },
  { slug: 'getting-started-with-nextjs3',
  title: 'getting-started-with-nextjs',
  image: 'getting-started-with-nextjs.png',
  excerpt: 'getting-started-with-nextjs',
  date: '2024-06-05' },
  { slug: 'getting-started-with-nextjs4',
  title: 'getting-started-with-nextjs',
  image: 'getting-started-with-nextjs.png',
  excerpt: 'getting-started-with-nextjs',
  date: '2024-06-05' },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS}/>
    </Fragment>
  );
}

export default HomePage;