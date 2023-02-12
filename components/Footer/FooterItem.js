import Link from 'next/link';

const FooterItem = ({ list }) => {
  return (
    <ul>
      {list.map(({ item, url, external }) => (
        <li className="first:mt-0 mt-2" key={item}>
          {external ? (
            <a
              className="capitalize hover:text-gray-700 transition"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item}
            </a>
          ) : (
            <Link
              className="capitalize hover:text-gray-700 transition"
              href={url}
            >
              {item}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default FooterItem;
