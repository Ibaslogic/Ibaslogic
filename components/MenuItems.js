import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import MenuDropdown from './MenuDropdown';

const MenuItems = ({ link, label, submenu, currentRoute }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (
        dropdown &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  return (
    <li
      ref={ref}
      className={`first:mt-16 md:py-0 md:first:mt-0 relative`}
    >
      {submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
            className="flex justify-between items-center px-8 md:px-0 w-full py-4 md:block text-[16.2px] leading-[1.4167] text-center md:text-[15px] md:leading-[24px] tracking-tight capitalize md:py-2 md:font-semibold text-[#1a2c47]"
          >
            {label}{' '}
            <span
              className={`w-[7px] h-[7px] inline-block align-middle border-l-[0.1rem] border-b-[0.1rem] border-current -rotate-45 ml-[0.38rem] mt-[-5px] ${
                dropdown ? '-rotate-[225deg] !mt-[1px]' : ''
              }`}
            />
          </button>
          <MenuDropdown submenus={submenu} {...{ dropdown }} />
        </>
      ) : (
        <Link
          href={`${link}`}
          className={`py-4 px-8 md:px-0 ${
            currentRoute === link
              ? 'text-[#000] md:border-b-[1.5px] md:border-solid md:border-[#1a2c47]'
              : ''
          } block text-[16.2px] leading-[1.4167] text-left md:text-[15px] md:leading-[24px] tracking-tight capitalize md:py-2 md:font-semibold text-[#1a2c47]`}
        >
          {label}
        </Link>
      )}
    </li>
  );
};

export default MenuItems;
