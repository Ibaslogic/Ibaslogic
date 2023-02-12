import FooterList from './FooterList';
import SocialFollow from './socialFollow';
import FooterTitle from './FooterTitle';

import config from '../../data/siteMetadata.js';

const { publisher } = config;

const Footer = () => {
  const learn = [
    { item: 'blog', url: '/blog/' },
    { item: 'series', url: '/series/' },
    {
      item: 'Open Source',
      url: 'https://github.com/Ibaslogic/Ibaslogic',
      external: true,
    },
  ];
  const company = [
    { item: 'home', url: '/' },
    { item: 'about', url: '/about/' },
    { item: 'contact', url: '/contact/' },
  ];
  const legal = [
    { item: 'privacy', url: '/privacy/' },
    { item: 'Terms of Service', url: '/terms/' },
  ];
  const more = [
    { item: 'support me', url: '#', external: true },
    {
      item: 'Newsletter',
      url: 'https://ibaslogic.substack.com/',
      external: true,
    },
  ];

  return (
    <footer className="bg-gray-50 text-[#24292f] text-[0.9em] pt-12 pb-9 sm:pt-12 sm:pb-9 border border-solid border-[#eaeaea]">
      <div className="px-[15px] mx-auto max-w-3xl lg:max-w-[1200px]">
        <div className="grid grid-cols-1 gap-y-6 sm:flex sm:flex-row sm:flex-wrap sm:justify-between">
          <div className="grid grid-cols-2 gap-6 sm:flex sm:flex-wrap sm:justify-between sm:flex-grow sm:mr-8 md:mr-20">
            <FooterList title="learn" list={learn} />
            <FooterList title="company" list={company} />
            <FooterList title="more" list={more} />
            <FooterList title="legal" list={legal} />
          </div>
          <div className="sm:w-[14%]">
            <FooterTitle title="connect" />
            <SocialFollow />
          </div>
        </div>
        <div className="mt-12">
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
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
