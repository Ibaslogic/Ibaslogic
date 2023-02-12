import { IoRefreshOutline } from 'react-icons/io5';

const DemoBrowser = ({ url }) => {
  return (
    <div className="w-full flex basis-9 items-center border-b border-solid border-[#eaeaea]">
      <div className="ml-3">
        <span className="bg-[#ff5f56] w-3 h-3 inline-block rounded-[50%]"></span>
        <span className="bg-[#ffbd2e] ml-2 w-3 h-3 inline-block rounded-[50%]"></span>
        <span className="bg-[#27c93f] ml-2 w-3 h-3 inline-block rounded-[50%]"></span>
      </div>
      <div className="relative w-full left-0 text-xs flex-1 flex items-center h-9 text-[#666]">
        <div className="flex-shrink-0 basis-[50px]"></div>
        <div className="flex flex-grow flex-shrink justify-center items-center px-3 relative bg-[#fafafa] rounded h-[70%]">
          <div className="flex justify-between items-center w-full">
            <span className="inline-flex w-3"></span>
            {url ? url : 'localhost:3000'}
            <span className="inline-flex">
              <IoRefreshOutline />
            </span>
          </div>
        </div>
        <div className="flex-shrink-0 basis-[100px]"></div>
      </div>
    </div>
  );
};

export default DemoBrowser;
