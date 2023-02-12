import HeaderItemsRender from './Global/Dropdown/HeaderItemsRender';

const NewsTopbar = () => {
  const topBar = true;

  return (
    <>
      {topBar && (
        <aside className="text-sm py-[0.75rem] border-b border-solid border-[#f0f0f2]">
          <div className="flex justify-between gap-x-3 items-center text-[13px] text-[black] px-[15px] max-w-3xl lg:max-w-[1200px] mx-auto">
            <p>
              Are you struggling learning web dev?{' '}
              <a
                href="https://ibaslogic.substack.com/"
                className="underline font-semibold text-[#8a4baf]"
                target="_blank"
                rel="noopener noreferrer"
                title="Sign up"
              >
                Then subscribe for actionable tips
              </a>
            </p>
            <div className="flex items-center justify-center">
              <HeaderItemsRender />
            </div>
          </div>
        </aside>
      )}
    </>
  );
};

export default NewsTopbar;
