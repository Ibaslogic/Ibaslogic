import Link from 'next/link';
import ViewCounter from '../components/viewCounter';

const BlogItem = (props) => {
  const { title, slug, external_post } = props;

  return (
    <li>
      <Link
        href={`/${slug}/`}
        className="block p-[0.6rem] hover:bg-gray-100 rounded"
      >
        <div className="flex flex-wrap items-center justify-between">
          <h2 className="mr-2 font-medium text-base leading-[1.3] tracking-[-.02rem] flex-[8]">
            {title}
          </h2>
          <span className="text-sm block mt-1 sm:mt-0 text-gray-500 flex-[2] text-right">
            {!external_post ? (
              <ViewCounter slug={slug} />
            ) : (
              '3rd party post'
            )}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default BlogItem;
