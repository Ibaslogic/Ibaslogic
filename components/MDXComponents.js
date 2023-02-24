import Link from 'next/link';
import Image from 'next/image';
import OriginallyWrittenFor from './OriginallyWrittenFor';
import PostNextUnit from './Global/Custom/PostNextUnit';
import PostSeriesLink from './Global/Custom/PostSeriesLink';
import EditorsNote from './Global/Custom/EditorsNote';
import MoreArticles from './Global/Custom/MoreArticles';
import Prerequisite from './Global/Custom/Prerequisite';
import TwitterFollow from './Global/Custom/TwitterFollow';
import CustomGithubStar from './Global/Custom/CustomGithubStar';
import Note from './Global/Custom/Note';
import Tip from './Global/Custom/Tip';
import Pre from './Pre';

import { BiLink } from 'react-icons/bi';

const CustomLink = ({ href, ...rest }) => {
  const isInternalLink = href && href.startsWith('/');
  const isHeadingLink = href && href.startsWith('#');

  if (isInternalLink) {
    return <Link href={href} {...rest}></Link>;
  } else if (isHeadingLink) {
    return (
      <a href={href} className="anchor" {...rest}>
        <BiLink />
      </a>
    );
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    />
  );
};

const CustomImage = (props) => {
  return <Image {...props} loading="lazy" />;
};

const Heading2 = (props) => {
  return <h2 {...props} data-toc />;
};

// const Heading3 = (props) => {
//   return <h3 {...props} data-toc />;
// };

const MDXComponents = {
  OriginallyWrittenFor,
  PostNextUnit,
  PostSeriesLink,
  EditorsNote,
  MoreArticles,
  TwitterFollow,
  CustomGithubStar,
  Prerequisite,
  Note,
  Tip,
  img: CustomImage,
  a: CustomLink,
  pre: Pre,
  h2: Heading2,
  // h3: Heading3,
};
export default MDXComponents;
