import SocialButton from '../SocialButton';
import { FaTwitter } from 'react-icons/fa';
import { BiStar } from 'react-icons/bi';
import { TiLocationArrow } from 'react-icons/ti';

const Hero = () => {
  return (
    <section className="py-20 px-8 custom_bg">
      <div className="w-full px-[15px] mx-auto max-w-5xl text-center">
        <div className="flex justify-center">
          <SocialButton
            Icon={FaTwitter}
            link="https://twitter.com/intent/follow?screen_name=ibaslogic&amp;region=follow_link"
            label="Follow @ibaslogic"
            className="flex items-center space-x-1 my-0 mx-1.5  py-2 px-2 text-xs rounded text-white bg-[#066cbb] hover:bg-[#1b95e0] border-[#7490a7]"
          />
          <SocialButton
            Icon={BiStar}
            link="https://github.com/Ibaslogic/Ibaslogic"
            label="Star on Github"
            className="flex items-center space-x-1 my-0 ml-1.5 py-1 px-2.5 text-xs rounded text-gray-800 bg-[#dfdfdf] border-[#dfdfdf] hover:bg-[#eff3f6]"
          />
        </div>
        <div className=" text-gray-800 py-[2rem] md:py-12">
          <h1 className="text-[42px] sm:text-6xl md:text-7xl leading-[1.1] lg:text-[90px] tracking-[-0.06em] lg:leading-none text-black mb-8 md:mb-12 font-bold">
            The Modern <span className="block sm:inline-block"></span>{' '}
            Dev. Tutorial for Beginners
          </h1>
          <p className="text-base font-light md:text-xl mb-12 md:mb-20 max-w-[700px] mx-auto">
            Hey, I'm Ibas. I write actionable guides that help
            aspiring developers learn web development in a much
            quicker way.
          </p>
          <div className="flex max-w-[250px] mx-auto flex-col sm:max-w-none sm:flex-row sm:justify-center">
            <button className="text-center mb-6 sm:mb-0 h-12 px-12 tracking-widest rounded-md bg-[#000] border border-[#000] hover:bg-[#fff] font-medium text-white hover:text-black">
              Get Started
            </button>
            <div className="flex justify-center items-center group sm:ml-3 flex-wrap">
              <a
                className="block text-lg"
                href="https://ibaslogic.substack.com/"
              >
                Join Newsletter
              </a>
              <span className="block transition text-[#8a4baf] duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:-translate-y-1 mb-2 ml-1">
                <TiLocationArrow />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
