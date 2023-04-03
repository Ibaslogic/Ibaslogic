import Link from 'next/link';
const MenuDropdown = ({ submenus, dropdown }) => {
  return (
    <ul
      className={`hidden md:py-5 bg-white md:rounded-lg md:custom_shadow text-[16.2px] md:absolute left-0 min-w-[15rem] md:pb-2 right-auto z-10 md:mt-[15px] ${
        dropdown ? '!block' : ''
      }`}
    >
      {submenus.map((submenu, index) => (
        <li key={index} className="relative">
          <Link
            href={submenu.link}
            className="py-2 md:py-3 px-14 md:px-5 text-left block hover:bg-[#f2f2f2]"
          >
            {submenu.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuDropdown;
