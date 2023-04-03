import { useState } from 'react';
import Link from 'next/link';
import navLinks from '../data/navLinks';

import SocialItem from './SocialItem';

import { FaGithub } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { useRouter } from 'next/router';

import config from '../data/siteMetadata.js';
import MenuItems from './MenuItems';

const { github } = config;

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const openDrawer = () => {
    setNavbarOpen(true);
  };

  const closeDrawer = () => {
    setNavbarOpen(false);
  };

  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <header className="z-[1000] sticky top-0 md:right-0 md:left-0 bg-[#fafbfc] h-[50px] md:h-[60px] w-full text-[#24292f]">
      <div className="flex justify-between items-center content-center px-[20px] lg:max-w-[77rem] mx-auto h-[50px] md:h-[60px] flex-wrap md:gap-8">
        <div className="flex items-center justify-start flex-row-reverse flex-nowrap ">
          <div className="ml-2 sm:ml-0">
            <Link href="/" className="flex" aria-label="logo link">
              <img
                className="w-8 md:w-9"
                src="/static/ibaslogic-ibas.png"
                alt="ibaslogic logo"
              />
            </Link>
          </div>
          <button
            onClick={openDrawer}
            aria-label="Menu button"
            aria-haspopup="menu"
            aria-expanded={navbarOpen ? 'true' : 'false'}
            className="relative cursor-pointer w-10 h-10 bg-transparent border-none focus:outline-none mr-4 sm:mr-8 ml-[-6px] rounded-[50%] flex items-center justify-center md:hidden"
          >
            <div className="absolute block h-[2px] w-[21px] bg-[#2d2d2d] top-[11.6px]" />
            <div className="absolute block h-[2px] w-[21px] bg-[#2d2d2d] top-[18px]" />
            <div className="absolute block h-[2px] w-[21px] bg-[#2d2d2d] top-[25.2px]" />
          </button>
        </div>
        <nav className="w-full order-2 block md:order-none md:h-auto md:w-auto">
          {navbarOpen && (
            <div
              className="fixed top-0 left-0 w-full h-screen z-[99] bg-[rgba(0,0,0,.4)] backdrop-blur-[5px]"
              role="button"
              tabIndex="0"
              onClick={closeDrawer}
            >
              <button className="absolute top-[16px] right-[20px] cursor-pointer text-white bg-transparent border-none focus:outline-none">
                <MdClose style={{ fontSize: '24px' }} />
              </button>
            </div>
          )}

          <ul
            className={`bg-white custom_transform invisible fixed right-14 bottom-0 left-0 top-0 max-w-[280px] min-w-[264px] md:min-w-0 z-[100] md:static md:flex md:flex-row md:max-w-full md:w-auto md:visible md:bg-transparent md:cust_translateZ md:gap-12 ${
              navbarOpen ? 'show-nav' : ''
            }`}
          >
            {navLinks.map(({ link, label, submenu }, index) => (
              <MenuItems
                key={index}
                {...{ link, label, submenu, currentRoute }}
              />
            ))}
          </ul>
        </nav>
        <div className="flex-1" />
        <div className="flex items-center justify-center gap-2">
          <SocialItem
            Icon={FaGithub}
            link={`https://github.com/${github}`}
            title="Star on Github"
            style="text-[21px]"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
