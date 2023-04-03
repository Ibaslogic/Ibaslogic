import aboutSite from '../../data/aboutPage/aboutSite.json';
import aboutAuthor from '../../data/aboutPage/aboutAuthor.json';
import openSource from '../../data/aboutPage/openSource.json';
import AboutSection from './AboutSection';
import { FaTwitter } from 'react-icons/fa';

import CustomPageHeading from '../CustomPageHeading';
import HeadLine from '../HeadLine';
// import AuthorWidget from '../AuthorWidget';
import NewsletterWidget from '../NewsletterWidget';
import SocialButton from '../SocialButton';

const AboutContent = () => {
  return (
    <>
      <CustomPageHeading title="About this site" />

      <section className="bg-white">
        <div className="w-full mx-auto max-w-3xl lg:max-w-[77rem] px-[20px]">
          <div className="flex flex-col lg:flex-row lg:gap-24">
            <div className="mt-3 mb-12">
              <section className="mb-8">
                <AboutSection section={aboutSite} />
              </section>
              <section className="mb-8">
                <HeadLine title="Open Source" />
                <AboutSection section={openSource} />
              </section>
              <section className="mb-8">
                <HeadLine title="Who is Ibas?" />
                <AboutSection section={aboutAuthor} />
              </section>
              <section>
                {/* <AuthorWidget /> */}
                <div className="w-44">
                  <SocialButton
                    Icon={FaTwitter}
                    link="https://twitter.com/intent/follow?screen_name=ibaslogic&amp;region=follow_link"
                    label="Follow @ibaslogic"
                    className=" py-1 px-6 text-xs text-white font-semibold bg-[#005bb3] hover:bg-[#066cbb] border-[#7490a7] rounded-2xl"
                  />
                </div>
              </section>
            </div>
            <aside className="md:sticky md:top-20 lg:max-h-[calc(100vh-13rem)] top-4 lg:mt-14">
              <div className="lg:w-80 rounded-lg bg-white mb-9 sm:bg-gray-50">
                <div className="sm:p-5">
                  <NewsletterWidget />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutContent;
