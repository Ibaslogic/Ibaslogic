import Layout from './Layout';
import ViewCounter from '../viewCounter';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaRedditAlien,
} from 'react-icons/fa';
import { FiEdit2 } from 'react-icons/fi';
import SocialItem from '../SocialItem';
import Comments from '../Comments';
import config from '../../data/siteMetadata.js';
import AuthorInfo from './AuthorInfo';
import Toc from '../Toc';
import ScrollToTop from '../ScrollToTop';
import { parseISO, format } from 'date-fns';

const {
  publisher,
  ibas_avatar,
  siteUrl,
  twitterShare,
  linkedin,
  siteRepo,
  // twitterHandle,
} = config;

const editPost = (slug) => {
  return `${siteRepo}/edit/main/data/posts/${slug}.mdx`;
};

const BlogLayout = ({ children, frontmatter }) => {
  const {
    publishedAt,
    updatedAt,
    title,
    toc,
    description,
    featured,
    slug,
    readingTime,
    author_name,
    // author_twitter,
    twitter_username,
    linkedIn_username,
    author_avatar,
    external_post,
    external_url,
  } = frontmatter;

  const url = `${siteUrl}/${slug}/`;

  const date = publishedAt === updatedAt ? publishedAt : updatedAt;

  const authorInfo = author_name
    ? {
        name: author_name,
        // handle: author_twitter,
        twitter: `https://twitter.com/${twitter_username}`,
        linkedIn: `https://twitter.com/${linkedIn_username}`,
        avatar: author_avatar,
      }
    : {
        name: publisher,
        // handle: twitterHandle,
        twitter: `https://twitter.com/${twitterShare}`,
        linkedIn: `https://www.linkedin.com/in/${linkedin}/`,
        avatar: ibas_avatar,
      };

  const { name, twitter, avatar, linkedIn } = authorInfo;
  const actualReadingTime = Math.floor(readingTime.minutes / 2);
  return (
    <Layout
      title={`${title}`}
      description={description}
      featured={featured}
      image={`${siteUrl}${featured}`}
      type="article"
      external_post={external_post}
      external_url={external_url}
    >
      <div className="w-full px-[20px] py-12 lg:grid mx-auto lg:max-w-[77rem] post_wrap">
        <main className="max-w-[760px] mx-auto post_main">
          <article>
            <div className="space-y-5 mb-12">
              <div className="flex text-base gap-1">
                <p>{format(parseISO(date), 'MMMM dd, yyyy')}</p>
                <span>{' . '}</span>
                <span>{`${actualReadingTime} min read`}</span>
              </div>

              <h1 className="text-3xl font-semibold md:text-[2.5rem] md:leading-[1.25] text-[#1a2c47] mb-[0.5em] lg:mt-8">
                {title}
              </h1>

              {description && (
                <p className="text-lg">{description}</p>
              )}

              <div className="text-gray-500">
                <span className="flex items-center gap-2 text-lg">
                  {external_post ? (
                    <span className="hidden">
                      <ViewCounter slug={slug} />
                    </span>
                  ) : (
                    <>
                      <ViewCounter slug={slug} />
                    </>
                  )}
                </span>
              </div>

              <AuthorInfo {...{ twitter, linkedIn, avatar, name }} />
            </div>

            <div className="prose max-w-none w-full">{children}</div>
            <div className="text-sm text-gray-500 mt-8">
              <a
                className="inline-flex items-center"
                href={editPost(slug)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {'Edit post on GitHub'}{' '}
                <span className="ml-2">
                  <FiEdit2 />
                </span>
              </a>
            </div>
          </article>
          <section className="max-w-[760px] mx-auto mt-12">
            <div className="text-gray-400 flex flex-col items-start justify-center">
              <p className="uppercase text-xs mb-3 text-gray-800">
                share
              </p>
              <div className="flex flex-row items-center">
                <SocialItem
                  Icon={FaTwitter}
                  link={`https://twitter.com/share?url=${url}&text=${title}&via=${twitterShare}`}
                  title="twitter"
                  style="shareIconStyle bg-[#34aadf]"
                />
                <SocialItem
                  Icon={FaFacebookF}
                  link={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                  title="facebook"
                  style="shareIconStyle bg-[#3c5a9a]"
                />
                <SocialItem
                  Icon={FaLinkedinIn}
                  link={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
                  title="linkedin"
                  style="shareIconStyle bg-[#0072b1]"
                />
                <SocialItem
                  Icon={FaRedditAlien}
                  link={`https://www.reddit.com/submit?url=${url}&title=${title}`}
                  title="reddit"
                  style="shareIconStyle bg-[#ff4500]"
                />
              </div>
            </div>
          </section>
        </main>
        <aside className="hidden lg:block max-w-[760px] mx-auto mt-12 lg:mt-0 post_aside text-[13px]">
          <div className="lg:sticky lg:top-[calc(7rem+3rem)] border-solid border border-[#eaeaea] lg:border-none pt-0 overflow-auto max-h-[calc(100vh-13rem)]">
            {toc && <Toc />}
          </div>
        </aside>
        <ScrollToTop />
        <section className="max-w-[760px] mx-auto mt-12 post_additonal_section">
          <Comments />
        </section>
      </div>
    </Layout>
  );
};

export default BlogLayout;
