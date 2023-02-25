import Image from 'next/image';
import SocialButton from '../SocialButton';
import { FaTwitter } from 'react-icons/fa';
import { BiStar } from 'react-icons/bi';
import DemoBrowser from '../DemoBrowser';

const Hero = () => {
  return (
    <section className="pt-8 pb-12 md:pt-12 md:pb-16 custom_bg text-center lg:text-left">
      <div className="w-full mx-auto max-w-3xl lg:max-w-[1200px] px-[20px] flex flex-col md:flex-row items-center gap-8">
        <div className="flex-[5.5]">
          <h1 className="text-3xl md:text-[38px] leading-[40px] md:leading-[50px] text-black mb-8 font-bold">
            The Modern<span className="lg:block"></span> Tutorial for
            Beginner <span className="lg:block"></span>
            Developers
            <span className="lg:block"></span>
          </h1>
          <div className="text-lg sm:text-xl mb-8 lg:max-w-[450px]">
            <p className="mb-8">
              Hey, I'm Ibas. This blog is where I share my experiments
              exploring the latest web technologies.
            </p>
            <p className="md:text-base">
              <a
                href="https://github.com/Ibaslogic/Ibaslogic"
                rel="noopener noreferrer"
                target="_blank"
                className="text-[#8a4baf] border-b border-[#d9bae8]"
              >
                Open source
              </a>
              : See a feature that inspires you? Then, use it in your
              web projects.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <SocialButton
              Icon={FaTwitter}
              link="https://twitter.com/intent/follow?screen_name=ibaslogic&amp;region=follow_link"
              label="Follow @ibaslogic"
              className="flex items-center space-x-1 my-0 mr-4 py-[14px] px-6 text-xs text-white font-semibold bg-[#066cbb] hover:bg-[#1b95e0] border-[#7490a7]"
            />
            <SocialButton
              Icon={BiStar}
              link="https://github.com/Ibaslogic/Ibaslogic"
              label="Star on Github"
              className="flex items-center space-x-1 my-0 py-[14px] px-6 text-xs text-gray-800 font-semibold bg-[#dfdfdf] border-[#dfdfdf] hover:bg-[#c7c7c7]"
            />
          </div>
        </div>
        <div className="relative w-full lg:flex-[4.5] lg:mt-[11px] hidden lg:block">
          <div className="w-full h-auto max-w-full rounded-md bg-white overflow-hidden flex flex-col custom_shadow">
            <DemoBrowser />
            <div className="flex-grow flex-shrink w-full overflow-auto">
              <div className="max-w-full">
                <Image
                  width={640}
                  height={363}
                  priority={true}
                  src="/hero2.png"
                  className="bg-[#f4f4f4] w-full"
                  alt="open source feature"
                />
              </div>
            </div>
          </div>

          <div className="">
            <div className="relative right-[25%] mt-[-170px]">
              {/* mt-[-190px] */}
              <div className="w-full h-auto max-w-full rounded-md bg-white overflow-hidden flex flex-col custom_shadow">
                <DemoBrowser url="vscode.dev" />
                <div className="flex-grow flex-shrink w-full overflow-auto">
                  <div className="max-w-full">
                    <Image
                      width={690}
                      height={315}
                      priority={true}
                      src="/code.png"
                      className="bg-[#f4f4f4] w-full"
                      alt="open source feature"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Image
            width={640}
            height={363}
            priority={true}
            src="/hero2.png"
            className="custom_shadow"
            alt="open source feature"
          />
          <Image
            width={690}
            height={315}
            priority={true}
            src="/code.png"
            className="custom_shadow hidden md:block absolute top-[53%] right-[25%]"
            alt="open source feature"
          /> */}
      </div>
    </section>
  );
};

export default Hero;
