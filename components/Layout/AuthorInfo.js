import Image from 'next/image';

const AuthorInfo = ({ link, name, handle, avatar }) => {
  return (
    <div className="flex items-center text-xs text-gray-500">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        title="twitter"
      >
        <div className="w-12 h-12">
          <Image
            width={70}
            height={70}
            src={avatar}
            className="rounded-full object-cover bg-gray-200 h-full"
            alt={name}
          />
        </div>
      </a>

      <div className="ml-2 text-sm">
        <div className="flex flex-col">
          <p className=" font-bold text-black">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              title="twitter"
              className="flex items-center gap-1"
            >
              <span>{name}</span>
              {/* <span>
                <Image
                  width={20}
                  height={20}
                  src="/check.png"
                  alt="author"
                />
              </span> */}
            </a>
          </p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            title="twitter"
          >
            {handle}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;
