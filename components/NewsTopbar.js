import HeaderItemsRender from './Global/Dropdown/HeaderItemsRender';

const NewsTopbar = () => {
  const topBar = true;

  return (
    <>
      {topBar && (
        <aside className="bg-[#1a2c47] text-base py-[4px]">
          <div className="flex justify-end gap-x-3 items-center text-[#fff] px-[20px] lg:max-w-[77rem] mx-auto">
            <p>
              <a
                href="https://ko-fi.com/ibasmajid"
                className="hover:underline font-semibold text-[#fff]"
                target="_blank"
                rel="noopener noreferrer"
                title="Support"
              >
                Sponsor this project
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
