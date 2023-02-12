import { useRef, useEffect } from 'react';

const Comment = () => {
  const commentBoxRef = useRef();

  useEffect(() => {
    let scriptEl = document.createElement('script');
    scriptEl.setAttribute('src', 'https://giscus.app/client.js');
    scriptEl.setAttribute('data-repo', 'Ibaslogic/comments');
    scriptEl.setAttribute(
      'data-repo-id',
      'MDEwOlJlcG9zaXRvcnkyODU5ODM2MDM='
    );
    scriptEl.setAttribute('data-category', 'Comments');
    scriptEl.setAttribute('data-category-id', 'DIC_kwDOEQvDc84CTDWR');
    scriptEl.setAttribute('data-mapping', 'pathname');
    scriptEl.setAttribute('data-reactions-enabled', '1');
    scriptEl.setAttribute('data-input-position', 'top');
    scriptEl.setAttribute('data-theme', 'light');
    scriptEl.setAttribute('data-loading', 'lazy');
    scriptEl.setAttribute('crossorigin', 'anonymous');
    scriptEl.setAttribute('async', true);
    commentBoxRef.current.appendChild(scriptEl);
  }, []);
  return (
    <>
      <h2 className="text-2xl sm:text-[1.65rem] mb-4 pb-5 font-semibold border-solid border-b border-[#f0f0f0]">
        Discussion
      </h2>
      <div ref={commentBoxRef} />
    </>
  );
};
export default Comment;
