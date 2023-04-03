import Layout from '../components/Layout/Layout';
import RecommendedPostSection from '../components/Home/RecommendedPostSection';
import Testimonial from '../components/Home/Testimonial';
import Banner from '../components/Home/Banner';
import AboutAuthor from '../components/AboutAuthor';

import featured from '../data/featured';
import reactSeries from '../data/allSeriesPost/react-series';
import gatsbySeries from '../data/allSeriesPost/gatsby-series';

const Home = () => {
  return (
    <Layout
      title="Helping You Improving Your Web Dev Knowledge!"
      description="Web dev Articles for the Self-Starters."
    >
      <main>
        <Banner />
        <section className="bg-white">
          <div className="w-full mx-auto max-w-3xl lg:max-w-[77rem] px-[20px] pt-12 lg:pb-12">
            <div className="flex flex-col lg:flex-row lg:gap-24">
              <div className="md:flex-grow">
                <Testimonial />
                <RecommendedPostSection
                  title="Featured Posts"
                  articleList={featured}
                  thumbnail="/static/images/featured.png"
                  to="/blog/"
                  text="Explore all posts"
                />
                <RecommendedPostSection
                  title="Getting Started with React"
                  articleList={reactSeries}
                  thumbnail="/static/images/react-tutorial-for-beginners/react-thumbnail.png"
                  to="/blog/"
                  text="Explore all posts"
                  showViews={true}
                />
                <RecommendedPostSection
                  title="Getting Started with Gatsby"
                  articleList={gatsbySeries}
                  thumbnail="/static/images/gatsby-tutorial-from-scratch-for-beginners/gatsby.png"
                  to="/blog/"
                  text="Explore all posts"
                  showViews={true}
                />
              </div>
              <aside className="md:sticky md:top-20 lg:max-h-[calc(100vh-13rem)] top-4 mt-14">
                <div className="lg:w-80 rounded-2xl bg-white mb-9 sm:custom_shadow">
                  <div className="sm:p-5">
                    <AboutAuthor
                      expand={true}
                      layout="flex-col sm:flex-row lg:flex-col"
                    />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
