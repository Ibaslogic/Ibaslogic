import Image from 'next/image';
import SocialLink from '../SocialLink';

const AuthorInfo = ({ twitter, linkedIn, name, avatar }) => {
  return (
    <div className="flex gap-4 items-center text-xs">
      <a
        href={twitter}
        target="_blank"
        rel="noopener noreferrer"
        title="twitter"
      >
        <div className="w-16 h-16">
          <Image
            width={70}
            height={70}
            src={avatar}
            className="rounded-full object-cover bg-gray-200 h-full"
            alt={name}
          />
        </div>
      </a>

      <div className="text-lg">
        <div className="flex flex-col">
          <p className="font-semibold text-[#1a2c47]">
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              title="twitter"
              className="flex text-[#005bb3] items-center gap-1"
            >
              <span>{name}</span>
            </a>
          </p>
          <div className="flex gap-3">
            <SocialLink link={twitter} text="Twitter" />
            <SocialLink link={linkedIn} text="LinkedIn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;
