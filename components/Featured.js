import Link from 'next/link';
import Image from 'next/image';

const FeaturedPost = ({ title, description, slug, thumbnail }) => {
  return (
    <div className="flex gap-4 mt-6">
      <Image
        width={60}
        height={60}
        src={thumbnail}
        className="object-cover bg-gray-200 m-0 w-[60px] h-[60px] rounded-md"
        alt={title}
      />
      <div className="text-base">
        <h2 className="font-semibold text-[1.3rem] leading-8 -mt-2">
          {title}
        </h2>
        <p className="mt-2">{description}</p>

        <Link
          href={`/${slug}/`}
          className="text-[#005bb3] inline-flex cursor-pointer mt-1"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPost;
