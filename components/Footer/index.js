import config from '../../data/siteMetadata.js';

const { publisher } = config;

const Footer2 = () => {
  const list = [
    {
      item: 'Open Source',
      url: 'https://github.com/Ibaslogic/Ibaslogic',
    },
    {
      item: 'support me',
      url: 'https://ko-fi.com/ibasmajid',
    },
    {
      item: 'Newsletter',
      url: 'https://ibaslogic.substack.com/',
    },
  ];

  return (
    <footer className="bg-gray-50 text-[#24292f] text-[0.9em] pt-12 pb-9 sm:pt-12 sm:pb-9 border border-solid border-[#eaeaea] text-center">
      <div className="px-[20px] mx-auto max-w-3xl lg:max-w-[1200px] flex items-center flex-col gap-2">
        <ul className="flex items-center justify-center gap-6">
          {list.map(({ item, url }) => (
            <li className="" key={item}>
              <a
                className="capitalize hover:text-[#8a4baf] transition"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="">
          <p>
            Copyright &copy; {new Date().getFullYear().toString()}{' '}
            <a
              className="text-[#6b6b6b] no-underline border-b border-[#6b6b6b]"
              href="https://twitter.com/ibaslogic"
              target="_blank"
              rel="noopener noreferrer"
              title="twitter"
            >
              {publisher}
            </a>
            . See{' '}
            <a
              className="no-underline border-b border-[#6b6b6b]"
              href="/privacy"
              title="privacy"
            >
              privacy
            </a>{' '}
            and{' '}
            <a
              className="no-underline border-b border-[#6b6b6b]"
              href="/terms"
              title="terms"
            >
              terms
            </a>{' '}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
