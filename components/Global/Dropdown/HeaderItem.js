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

  // const onMouseEnter = () => {
  //   window.innerWidth > 960 && setDropdown(true);
  // };

  // const onMouseLeave = () => {
  //   window.innerWidth > 960 && setDropdown(false);
  // };

  return (
    <div
      ref={ref}
      // onMouseEnter={onMouseEnter}
      // onMouseLeave={onMouseLeave}
      className="relative text-sm"
    >
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
          className="hover:bg-[#f2f2f2] block text-left py-[0.7rem] px-4"
          href={items.url}
        >
          {items.label}
        </a>
      )}
    </div>
  );
};

export default HeaderItem;
