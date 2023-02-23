import topSection from '../../data/aboutPage/topSection.json';
import secondSection from '../../data/aboutPage/secondSection.json';
import thirdSection from '../../data/aboutPage/thirdSection.json';
// import Subscribe from '../Newsletter/Subscribe';
import Heading from '../Heading';
import AboutSection from './AboutSection';
// import WorkForU from '../Global/WorkForU';
import SocialButton from '../SocialButton';
import { FaTwitter } from 'react-icons/fa';
import CustomPageHeading from '../CustomPageHeading';

const AboutContent = () => {
  return (
    <>
      <CustomPageHeading
        title="About Ibaslogic"
        description="I share dev articles, including some awesome project-based ones that will help you learn dev topics faster than ever before."
      />
      <div className="text-gray-600 about px-[15px] mx-auto max-w-3xl pt-12 pb-12">
        <section className="mb-8">
          <AboutSection section={topSection} />
        </section>
        <section className="mb-8">
          <Heading title="Open Source" />
          <AboutSection section={secondSection} />
        </section>
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
    </>
  );
};

export default AboutContent;
