import topSection from '../../data/aboutPage/topSection.json';
import secondSection from '../../data/aboutPage/secondSection.json';
import thirdSection from '../../data/aboutPage/thirdSection.json';
import Subscribe from '../Newsletter/Subscribe';
import PageHeading from '../PageHeading';
import Heading from '../Heading';
import AboutSection from './AboutSection';
// import WorkForU from '../Global/WorkForU';
import SocialButton from '../SocialButton';
import { FaTwitter } from 'react-icons/fa';

const AboutContent = () => {
  return (
    <div className="text-gray-600 max-w-full about">
      <section className="mb-8">
        <PageHeading title="About Ibaslogic" />
        <AboutSection section={topSection} />
      </section>
      <section className="mb-8">
        <Heading title="Open Source" />
        <AboutSection section={secondSection} />
      </section>
      {/* <section className="pt-16 pb-20">
        <div className="mx-auto max-w-3xl lg:max-w-4xl flex flex-col items-center md:flex-row md:justify-between">
          <div className="text-center mb-6 md:text-left md:mb-0 md:max-w-lg md:mt-[-15px]">
            <p className="text-3xl font-bold tracking-tight lg:mt-8 text-[2rem] text-black md:text-[42px] md:leading-[1.1] mb-3">
              Get Exclusive Dev Knowledge
            </p>
            <p>
              Keep up to date with the latest web development tips,
              tricks and actionable guides.
            </p>
          </div>
          <Subscribe />
        </div>
      </section> */}
      <section className="mb-8">
        <Heading title="Who is Ibas?" />
        <AboutSection section={thirdSection} />
      </section>
      <section className="w-44">
        {/* <WorkForU /> */}
        <SocialButton
          Icon={FaTwitter}
          link="https://twitter.com/intent/follow?screen_name=ibaslogic&amp;region=follow_link"
          label="Follow @ibaslogic"
          className="flex items-center space-x-1 my-0 py-1 px-6 text-xs text-white font-semibold bg-[#1b95e0] hover:bg-[#066cbb] border-[#7490a7] rounded-2xl"
        />
      </section>
    </div>
  );
};

export default AboutContent;
