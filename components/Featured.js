import Link from 'next/link';
import ViewCounter from './viewCounter';

const FeaturedPost = ({ title, description, slug }) => {
  return (
    <div className="custom_shadow no_border">
      <Link href={`/${slug}/`}>
        <div className="px-6 pt-8 pb-9 custom_pad">
          <span className="text-base block text-gray-700">
            <ViewCounter slug={slug} />
          </span>
          <h2 className="my-3 font-bold text-lg leading-[1.3]">
            {title}
          </h2>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedPost;
