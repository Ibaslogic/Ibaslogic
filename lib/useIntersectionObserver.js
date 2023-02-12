import { useState, useEffect, useRef } from 'react';

function useIntersectionObserver(items, rootMargin, threshold) {
  const [activeNode, setActiveNode] = useState(null);

  let observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 1)
            setActiveNode(entry.target.getAttribute('id'));
        });
      },
      {
        root: null,
        rootMargin,
        threshold,
      }
    );

    items.forEach((item) => {
      if (item !== '#') {
        let target = document.querySelector(item);
        if (target) observer.current.observe(target);
      }
    });

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [activeNode, items, rootMargin, threshold]);

  return [activeNode];
}

export default useIntersectionObserver;
