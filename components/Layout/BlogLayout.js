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
  siteRepo,
  twitterHandle,
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
    author_twitter,
    author_link,
    author_avatar,
    external_post,
    external_url,
  } = frontmatter;

  const url = `${siteUrl}/${slug}/`;

  const date = publishedAt === updatedAt ? publishedAt : updatedAt;

  const authorInfo = author_name
    ? {
        name: author_name,
        handle: author_twitter,
        link: author_link,
        avatar: author_avatar,
      }
    : {
        name: publisher,
        handle: twitterHandle,
        link: `https://twitter.com/${twitterShare}`,
        avatar: ibas_avatar,
      };

  const { name, link, avatar, handle } = authorInfo;
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
      <div className="w-full px-[15px] py-12 lg:grid mx-auto max-w-3xl lg:max-w-[1200px] post_wrap">
        <main className="max-w-[700px] mx-auto lg:mx-5 post_main">
          <article>
            <div className="space-y-5 mb-8">
              <div className="flex text-sm gap-1">
                <p>{format(parseISO(date), 'MMMM dd, yyyy')}</p>
                <span>{' . '}</span>
                <span>{`${actualReadingTime} min read`}</span>
              </div>

              <h1 className="text-3xl font-bold md:text-[2.5rem] md:leading-[1.25] text-black mb-[0.5em] lg:mt-8">
                {title}
              </h1>
              <div
                className={`flex justify-between flex-wrap items-center ${
                  external_post ? 'lg:!m-0' : ''
                }`}
              >
                <div className="lg:hidden">
                  <AuthorInfo
                    link={link}
                    avatar={avatar}
                    handle={handle}
                    name={name}
                  />
                </div>

                <div className="text-gray-500 m-0">
                  <span className="flex items-center gap-2">
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
              </div>
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
        </main>

        <aside className="max-w-[700px] mx-auto mt-12 lg:mt-0  post_aside">
          {/* lg:w-[100px] */}
          <div className="lg:sticky lg:top-[212px] text-gray-400 flex flex-col items-start justify-center">
            <p className="uppercase text-xs mb-3 text-gray-800 lg:hidden">
              share
            </p>
            <div className="flex flex-row items-center lg:items-start lg:flex-col">
              <SocialItem
                Icon={FaTwitter}
                link={`https://twitter.com/share?url=${url}&text=${title}&via=${twitterShare}`}
                title="twitter"
                style="shareIconStyle lg:mt-[10px] bg-[#34aadf]"
              />
              <SocialItem
                Icon={FaFacebookF}
                link={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                title="facebook"
                style="shareIconStyle lg:mt-[8px] bg-[#3c5a9a]"
              />
              <SocialItem
                Icon={FaLinkedinIn}
                link={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
                title="linkedin"
                style="shareIconStyle lg:mt-[13px] bg-[#0072b1]"
              />
              <SocialItem
                Icon={FaRedditAlien}
                link={`https://www.reddit.com/submit?url=${url}&title=${title}`}
                title="reddit"
                style="shareIconStyle lg:mt-[13px] bg-[#ff4500]"
              />
            </div>
          </div>
        </aside>
        <aside className="hidden lg:block max-w-[700px] mx-auto mt-12 lg:mt-0 post_aside_right text-[13px]">
          <div className="border-solid border border-[#eaeaea] lg:border-none py-9">
            <div className="lg:flex flex-row items-center text-xs gap-3 text-gray-500 border-solid border-b border-[#eaeaea] pb-5">
              <AuthorInfo
                link={link}
                avatar={avatar}
                handle={handle}
                name={name}
              />
            </div>
          </div>

          <div className="lg:sticky lg:top-[calc(7rem+3rem)] border-solid border border-[#eaeaea] lg:border-none pt-0 overflow-auto max-h-[calc(100vh-13rem)]">
            {toc && <Toc />}
          </div>
          {/* </div> */}
        </aside>
        <ScrollToTop />
        <section className="max-w-[700px] mx-auto lg:mx-5 mt-12 post_additonal_section">
          <Comments />
        </section>
        {/* <div className="lg:flex-grow lg:order-3"></div> */}
      </div>
    </Layout>
  );
};

export default BlogLayout;
