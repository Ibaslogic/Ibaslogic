import Link from 'next/link';

const PostSeriesLink = ({ label, datas }) => {
  return (
    <div className="my-6 p-5 border border-solid border-[#eaeaea]">
      <p className="!text-base md:!text-lg leading-5 font-semibold mb-5 !mt-0">
        {label}
      </p>
      <ul className="flex flex-row flex-wrap justify-between list-none text-[15px] leading-6 !mb-0 pl-0">
        {datas.map((data, index) => (
          <li
            className="seriesLinkItem p-0 !text-[15px] sm:flex my-2 md:my-1 w-full"
            key={index}
          >
            <span className="flex-[1.8] md:flex-[1.6]">
              {data.prefix}
            </span>
            <span className="flex-[.4]"> – </span>
            <span className="flex-[7.8] md:flex-[8]">
              <Link
                href={data.url}
                className="text-inherit text-[15px] leading-5 no-underline border-none hover:border-solid hover:border-b hover:border-[#8a4baf]"
              >
                {data.label}
              </Link>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostSeriesLink;
