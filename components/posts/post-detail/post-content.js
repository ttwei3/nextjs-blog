import PostHeader from "./post-header";
import classes from './post-content.module.css';
import ReactMarkdown from 'react-markdown';

const DUMMY_POST = {
  slug: 'getting-started-with-nextjs2',
  title: 'getting-started-with-nextjs',
  image: 'getting-started-with-nextjs.png',
  excerpt: 'getting-started-with-nextjs',
  date: '2024-06-05',
  content: '# This is a first post'
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`
  return(
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} / >
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;