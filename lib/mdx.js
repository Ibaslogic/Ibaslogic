import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import readingTime from 'reading-time';

// rehype plugins
import imageSize from 'rehype-img-size';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrismPlus from 'rehype-prism-plus';

const postsDirectory = path.join(process.cwd(), 'data/posts');

export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const mdxSource = fs.readFileSync(fullPath, 'utf8');

  // https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'esbuild.exe'
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'bin',
      'esbuild'
    );
  }

  const { code, frontmatter } = await bundleMDX({
    source: mdxSource,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? [])];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'append',
          },
        ],
        [imageSize, { dir: 'public' }],
        [rehypePrismPlus, { ignoreMissing: true }],
      ];

      return options;
    },
  });
  return {
    frontMatter: {
      readingTime: readingTime(code),
      slug: slug || null,
      ...frontmatter,
    },
    code,
  };
}

export async function getBlogPostData() {
  const filenames = fs.readdirSync(postsDirectory);
  const allPostsData = filenames.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '');

    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      slug,
      ...matterResult.data,
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.updatedAt < b.updatedAt) return 1;
    if (a.updatedAt > b.updatedAt) return -1;
    return 0;
  });
}

export async function getAllPostSlugs() {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => {
    return {
      params: {
        slug: filename.replace(/\.mdx$/, ''),
      },
    };
  });
}
