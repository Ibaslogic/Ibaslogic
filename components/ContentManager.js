import { useState } from 'react';
// import HeadLine from './HeadLine';
import Image from 'next/image';
import SocialButton from './SocialButton';
import { FaTwitter } from 'react-icons/fa';

const ContentManager = ({
  managerImage,
  name,
  content,
  title,
  layout,
  author,
  expand,
}) => {
  const [expandContent, setExpandContent] = useState(expand);

  return (
    <div className={`flex gap-4 mt-6 ${layout ? layout : ''}`}>
      <Image
        width={100}
        height={100}
        src={managerImage}
        className="object-cover bg-gray-200 w-[100px] h-[100px] m-0 rounded-md"
        alt={name}
      />
      <div className="text-base">
        <p className="text-xl font-semibold">{name}</p>
        {title && <p className="text-sm text-gray-600">{title}</p>}

        <div
          className={`max-h-12 h-12 overflow-hidden mt-2 ${
            expandContent ? 'max-h-none h-auto' : ''
          }`}
        >
          <p>{content}</p>
          {author && (
            <div className="max-w-[11rem] mt-4">
              <SocialButton
                Icon={FaTwitter}
                link="https://twitter.com/intent/follow?screen_name=ibaslogic&amp;region=follow_link"
                label="Follow @ibaslogic"
                className=" py-1 px-6 text-xs text-white font-semibold bg-[#005bb3] hover:bg-[#066cbb] border-[#7490a7] rounded-2xl"
              />
            </div>
          )}
        </div>

        <a
          onClick={() => setExpandContent((prev) => !prev)}
          className="text-[#005bb3] inline-flex cursor-pointer mt-2"
        >
          {expandContent ? 'Show less' : 'Show more'}
        </a>
      </div>
    </div>
  );
};

export default ContentManager;
