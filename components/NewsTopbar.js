import HeaderItemsRender from './Global/Dropdown/HeaderItemsRender';

const NewsTopbar = () => {
  const topBar = true;

  return (
    <>
      {topBar && (
        <aside className="bg-[#1a2c47] text-sm py-[4px]">
          <div className="flex justify-end gap-x-3 items-center text-[14px] text-[#fff] px-[20px] lg:max-w-[77rem] mx-auto">
            {/* <p>
              Are you struggling learning web dev?{' '}
              <a
                href="https://ibaslogic.substack.com/"
                className="underline font-semibold text-[#fff]"
                target="_blank"
                rel="noopener noreferrer"
                title="Sign up"
              >
                Then subscribe for actionable tips
              </a>
            </p> */}
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
