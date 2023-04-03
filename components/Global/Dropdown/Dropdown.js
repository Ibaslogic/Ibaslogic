import { BsArrowUpRight } from 'react-icons/bs';

const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul
      className={`absolute hidden right-0 left-auto text-sm z-[9999] min-w-[10rem] py-2 px-0 bg-white text-[#36313d] rounded-lg custom_shadow ${
        dropdown ? '!block' : ''
      }`}
    >
      {submenus.map((submenu, index) => (
        <li key={index}>
          {submenu.label === 'Support me' ? (
            <>
              <a
                className="hover:bg-[#f2f2f2] block text-left py-[0.7rem] px-4"
                href={submenu.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {submenu.label}
                <span className="block text-xs text-[#005bb3]">
                  Coffee fuels coding ☕️
                </span>
              </a>
            </>
          ) : submenu.label === 'React tutorial v1' ? (
            <>
              <a
                className="hover:bg-[#f2f2f2] text-left py-[0.7rem] px-4 flex items-center gap-2 font-semibold text-[13px]"
                href={submenu.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {submenu.label}
                <span className="block text-xs text-[#005bb3]">
                  <BsArrowUpRight />
                </span>
              </a>
            </>
          ) : (
            <a
              className="hover:bg-[#f2f2f2] block text-left py-[0.7rem] px-4"
              href={submenu.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {submenu.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
