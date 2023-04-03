import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import useIntersectionObserver from '../lib/useIntersectionObserver';

export default function Toc() {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll('[data-toc]')
    );
    setHeadings(headingElements);
  }, []);

  const [activeNode] = useIntersectionObserver(
    ['#introduction', ...headings.map((heading) => `#${heading.id}`)],
    `0% 0% -80% 0%`,
    1
  );

  // Function to determine the Heading Level based on `nodeName` (H2, H3, etc)
  // const getLevel = (nodeName) => {
  //   return Number(nodeName.replace('H', ''));
  // };

  return (
    <nav className="text-[#78757a]">
      <h2 className="font-semibold text-[#36313d] text-lg">
        Jump ahead:
      </h2>
      <ul className="mt-4">
        {headings.map((heading) => {
          return (
            <li
              key={heading.id}
              className="relative text-base pl-5 border-l border-[#d2d3d7] leading-[1.7] py-1"
            >
              <a
                href={`#${heading.id}`}
                className={clsx('block hover:text-[#005bb3]', {
                  'text-[#005bb3] before:absolute before:bg-[currentColor] before:w-[2px] before:h-full before:top-0 before:left-[-1px] before:right-[auto]':
                    heading.id === activeNode,
                  // 'ml-3': getLevel(heading.nodeName) === 3,
                })}
              >
                {heading.innerText.replace('#', '')}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/* Credits:
https://github.com/pyadav/pyadav.io/blob/master/src/components/Toc/Toc.tsx 
*/
