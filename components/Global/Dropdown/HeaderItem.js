import { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';

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
            className="text-base rounded-[50%] flex items-center justify-center gap-1"
            type="button"
            aria-label="Menu button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            <span>{items.label}</span>
            <span>More</span>
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <a
          className="hover:bg-[#f2f2f2] text-left py-[0.7rem] px-4"
          href={items.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {items.label}
        </a>
      )}
    </div>
  );
};

export default HeaderItem;
