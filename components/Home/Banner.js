import SocialButton from '../SocialButton';
import { RxTwitterLogo } from 'react-icons/rx';
import { BiStar } from 'react-icons/bi';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { BsArrowUpRight } from 'react-icons/bs';

const Banner = () => {
  return (
    <section className="pt-10 lg:pt-20 text-left">
      <div className="w-full mx-auto max-w-3xl lg:max-w-[77rem] px-[20px]">
        <h1 className="text-[32px] leading-9 md:text-[38px] text-[#1a2c47] mb-4 font-semibold">
          <span>The Modern Tutorial</span>{' '}
          <span className="lg:block"></span>{' '}
          <span className="lg:text-[27px]">
            for Beginner Developers
          </span>
        </h1>
        <p className="mb-4 text-lg sm:text-xl">
          Hey, I'm Ibas. This blog is where I share my exciting
          discoveries and experiments with the latest web
          technologies.
        </p>
        <p className="text-base mb-4 sm:pr-28 text-[#61738e]">
          <span>
            Unleash your creativity and take your web development
            skills to new heights with our carefully curated
            collection of articles.{' '}
          </span>
          <span className="invisible lg:visible">
            Join us on a journey of inspiration and innovation as you
            tackle your next project with confidence.
          </span>
        </p>
        <p className="mb-8">
          <a
            href="https://github.com/Ibaslogic/Ibaslogic"
            rel="noopener noreferrer"
            target="_blank"
            className="text-[#005bb3] inline-flex items-center gap-1"
          >
            Open Source Project{' '}
            <span className="text-xs">
              <BsArrowUpRight />
            </span>
          </a>
        </p>
      </div>
      <div className="bg-[#fafbfc]">
        <div className="flex sm:gap-6 justify-start sm:justify-center w-full mx-auto lg:max-w-[77rem] p-0 sm:p-[20px] overflow-auto">
          <SocialButton
            Icon={HiOutlineNewspaper}
            link="https://ibaslogic.substack.com/"
            label="Newsletter"
            className="sm:bg-[#fff] sm:custom_shadow sm:rounded-md py-[13px] min-w-[10rem] lg:min-w-[15rem] lg:w-72"
          />
          <SocialButton
            Icon={RxTwitterLogo}
            link="https://twitter.com/intent/follow?screen_name=ibaslogic&amp;region=follow_link"
            label="Follow @ibaslogic"
            className="bg-transparent sm:border border-[#d6dee5] hover:bg-[#fff] sm:rounded-md py-[13px] min-w-[10rem] lg:min-w-[15rem] lg:w-72"
          />
          <SocialButton
            Icon={BiStar}
            link="https://github.com/Ibaslogic/Ibaslogic"
            label="Star on Github"
            className="bg-transparent sm:border border-[#d6dee5] hover:bg-[#fff] sm:rounded-md py-[13px] min-w-[10rem] lg:min-w-[15rem] lg:w-72"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
