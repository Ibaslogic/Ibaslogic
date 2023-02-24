import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const avatar = `/avatar.png`;

const WorkForU = () => {
  const [display, setDisplay] = useState(true);
  return (
    <>
      {display && (
        <div className="">
          <div className="bg-[#f4f6f8] flex justify-center items-center p-3 sm:p-6 md:p-5 mb-9">
            {/* gap-x-6 */}
            <div className="w-[72px] h-[72px] mr-6 min-w-max">
              <Image
                width={72}
                height={72}
                src={avatar}
                className="object-cover rounded-full bg-gray-200 h-full"
                alt="Ibas Majid"
              />
            </div>

            <div className="leading-5">
              <p className="mb-[10px] text-gray-800 font-semibold text-xl font-heading">
                Need a skilled writer or developer? Contact me!{' '}
              </p>
              <p className="flex text-sm lg:text-base">
                <span>
                  <Link
                    href="/contact/"
                    className="text-[#8a4baf] leading-5 no-underline border-b border-[#8a4baf]"
                  >
                    I'm sending a message right now
                  </Link>
                </span>
                <span className="relative before:absolute before:bg-[#979797] before:w-1 before:h-1 before:top-2/4 before:left-0 before:mt-[-2px] ml-6 pl-6"></span>
                <span>
                  <a
                    href="#"
                    className="cursor-pointer text-[#8a4baf] leading-5 no-underline border-b border-[#8a4baf]"
                    onClick={() => setDisplay(false)}
                  >
                    No thanks, some other time
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkForU;
