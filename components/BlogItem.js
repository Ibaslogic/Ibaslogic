import Link from 'next/link';
import ViewCounter from '../components/viewCounter';
import { BsCardText } from 'react-icons/bs';
import { parseISO, format } from 'date-fns';

const BlogItem = (props) => {
  const { title, slug, updatedAt, showViews } = props;

  return (
    <li className="flex items-center mt-5 gap-3">
      <span>
        <BsCardText />
      </span>
      <div className="text-sm sm:text-base font-normal flex-grow">
        <Link href={`/${slug}/`} className="block">
          <div className="flex flex-wrap items-center justify-between">
            <h2 className="mr-2 font-medium leading-[1.3] flex-[9]">
              {title}
            </h2>
            <span className="block mt-1 sm:mt-0 flex-[4] text-sm text-right">
              {showViews ? (
                <ViewCounter slug={slug} />
              ) : (
                updatedAt && (
                  <p>{format(parseISO(updatedAt), 'MMM dd, yyyy')}</p>
                )
              )}
            </span>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default BlogItem;
