import PostHeader from "./post-header";
import classes from './post-content.module.css';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenders = {
    // 自定义段落渲染器
    p(paragraph) {
      const { node } = paragraph;

      // 检查段落中的第一个子节点是否为图片
      if (node.children[0] && node.children[0].tagName === 'img') {
        const image = node.children[0];
        const imageSrc = image.properties.src;

        return (
          <div className={classes.image}>
            <Image src={`/images/posts/${post.slug}/${imageSrc}`} alt={image.properties.alt} width={600} height={300} />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    }
  }

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenders}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;