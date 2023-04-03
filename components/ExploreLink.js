import Link from 'next/link';
import { HiArrowNarrowRight } from 'react-icons/hi';
const ExploreLink = ({ text, to }) => {
  return (
    <Link
      href={to}
      className="flex items-center gap-1 text-[#005bb3] text-sm"
    >
      {text}{' '}
      <span className="text-xl">
        <HiArrowNarrowRight />
      </span>
    </Link>
  );
};

export default ExploreLink;
