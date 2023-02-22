import { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';

import { BsArrowUpRight } from 'react-icons/bs';

const HeaderItem = ({ items }) => {
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
    <div ref={ref} className="relative text-sm">
      {items.submenu ? (
        <>
          <button
            className="text-[23px] h-10 w-10 rounded-[50%] flex items-center justify-center"
            type="button"
            aria-label="Menu button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.label}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <a
          className="hover:bg-[#f2f2f2] text-left py-[0.7rem] px-4 flex items-center gap-2 text-[#f44250] font-bold text-base"
          href={items.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {items.label} <BsArrowUpRight />
        </a>
      )}
    </div>
  );
};

export default HeaderItem;
