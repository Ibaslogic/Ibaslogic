import { HiArrowNarrowRight } from 'react-icons/hi';

import Link from 'next/link';
const HeadingII = ({ title }) => {
  return (
    <div className="flex flex-row flex-wrap justify-between items-center border-b border-solid border-[#f0f0f2] pb-3 mx-[6px]">
      <h2 className="text-[#696969] font-medium text-xl md:text-2xl tracking-tight">
        {title}
      </h2>
      <Link
        href="/blog/"
        className="flex items-center gap-1 justify-center"
      >
        Explore all posts{' '}
        <span className="text-xl">
          <HiArrowNarrowRight />
        </span>
      </Link>
    </div>
  );
};

export default HeadingII;
