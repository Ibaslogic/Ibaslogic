import { useState } from 'react';
import Link from 'next/link';
import navLinks from '../data/navLinks';

import SocialItem from './SocialItem';

import { FaGithub } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { useRouter } from 'next/router';

// import { Open_Sans } from '@next/font/google';

// const openSansFonts = Open_Sans({
//   weight: ['400'],
//   style: ['normal'],
//   subsets: ['latin'],
// });

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
    <header className="z-[1000] sticky top-0 md:right-0 md:left-0 bg-white h-[62px] md:h-[70px] w-full text-[#24292f] border-b border-solid border-[#eaeaea]">
      {/*fixed shadow */}
      <div className="flex justify-between items-center content-center px-[15px] max-w-3xl lg:max-w-[1200px] mx-auto h-[62px] md:h-[70px] flex-wrap">
        <div className="flex items-center justify-start flex-row-reverse flex-nowrap ">
          <div className="ml-2 sm:ml-0 sm:mr-5">
            <Link href="/" className="flex" aria-label="logo link">
              <img
                className="w-9 h-9"
                src="/static/logo.png"
                alt="logo"
              />
            </Link>
          </div>
          <button
            onClick={openDrawer}
            aria-label="Menu button"
            aria-haspopup="menu"
            aria-expanded={navbarOpen ? 'true' : 'false'}
            className="relative cursor-pointer w-10 h-10 bg-transparent border-none focus:outline-none mr-4 ml-[-6px] rounded-[50%] flex items-center justify-center sm:hidden"
          >
            <div className="absolute block h-[2.5px] w-[23px] bg-[#2d2d2d] top-[10.6px]" />
            <div className="absolute block h-[2.5px] w-[23px] bg-[#2d2d2d] top-[18px]" />
            <div className="absolute block h-[2.5px] w-[23px] bg-[#2d2d2d] top-[26.2px]" />
          </button>
        </div>
        <nav className="w-full order-2 block sm:order-none sm:h-auto sm:w-auto">
          {navbarOpen && (
            <div
              className="fixed top-0 left-0 w-full h-screen z-[99] opacity-[0.85] bg-black"
              role="button"
              tabIndex="0"
              onClick={closeDrawer}
            >
              <button className="absolute top-[16px] right-[15px] cursor-pointer text-white bg-transparent border-none focus:outline-none">
                <MdClose style={{ fontSize: '24px' }} />
              </button>
            </div>
          )}

          <ul
            className={`bg-white custom_transform invisible fixed right-14 bottom-0 left-0 top-0 max-w-[300px] min-w-[264px] z-[100] sm:static sm:flex sm:flex-row sm:max-w-full sm:w-auto sm:visible sm:bg-transparent px-4 sm:px-0 sm:cust_translateZ  ${
              navbarOpen ? 'show-nav' : ''
            }`}
          >
            {navLinks.map(({ link, label }, index) => (
              <li
                className={`first:mt-20 sm:py-0 sm:first:mt-0 sm:first:ml-4 sm:mr-[2.5rem] lg:first:ml-6 lg:mr-14`}
                // border-b border-solid border-[#cfd6dd] sm:border-none
                key={index}
              >
                <Link
                  href={`${link}`}
                  className={`py-4 ${
                    currentRoute === link
                      ? 'text-[#a1a1a1] sm:text-black sm:border-b-[1.5px] sm:border-solid sm:border-[#8a4baf]'
                      : ''
                  } block text-2xl leading-[1.4167] text-center font-normal sm:text-base sm:leading-[24px] tracking-tight sm:opacity-70 sm:hover:opacity-100 capitalize sm:py-2`}
                >
                  {/*  */}
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex-1" />
        <div className="flex items-center justify-center gap-2">
          <SocialItem
            Icon={FaGithub}
            link="#"
            title="Star on Github"
            style="text-[21px]"
          />
          {/* <SocialItem
            Icon={FaTwitter}
            link="#"
            title="Follow on Twitter"
            style="text-[21px]"
          /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
