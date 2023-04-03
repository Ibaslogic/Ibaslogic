import BlogItem from '../BlogItem';
import Image from 'next/image';
import HeadLine from '../HeadLine';
import ExploreLink from '../ExploreLink';

const RecommendedPostSection = ({
  title,
  articleList,
  thumbnail,
  to,
  text,
  showViews,
}) => {
  return (
    <div className="bg-[#fafbfc] rounded-xl mt-6">
      <div className="flex gap-4 items-center p-5">
        <Image
          width={70}
          height={70}
          src={thumbnail}
          className="object-cover bg-gray-200 h-full m-0 rounded-md"
          alt={title}
        />
        <div className="grid gap-1">
          <HeadLine title={title} />
          <ExploreLink {...{ to, text }} />
        </div>
      </div>
      <div className="border-t border-[#d6dee5]">
        <ul className="p-5 pt-0">
          {articleList.map(({ title, href, updatedAt }) => (
            <BlogItem
              key={title}
              slug={href}
              {...{ title, updatedAt, showViews }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecommendedPostSection;
