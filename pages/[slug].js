import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';
import MDXComponents from '../components/MDXComponents';
import BlogLayout from '../components/Layout/BlogLayout';
import { getAllPostSlugs, getPostData } from '../lib/mdx';

const SinglePost = ({ code, frontMatter }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <>
      <BlogLayout frontmatter={frontMatter}>
        <Component components={{ ...MDXComponents }} />
      </BlogLayout>
    </>
  );
};

export default SinglePost;

export async function getStaticPaths() {
  const paths = await getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostData(params?.slug);
  // console.log(post);
  return {
    props: {
      ...post,
    },
  };
}
