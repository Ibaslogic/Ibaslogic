import Layout from '../components/Layout/Layout';
import Hero from '../components/Home/Hero_';
import RecommendedPostSection from '../components/Home/RecommendedPostSection';
// import NewsletterHome from '../components/Home/NewsletterHome';
import Testimonial from '../components/Home/Testimonial';
import HeadingIII from '../components/HeadingIII';

const Home = () => {
  return (
    <Layout
      title="Helping You Improving Your Web Dev Knowledge!"
      description="Web dev Articles for the Self-Starters."
    >
      <main>
        <Hero />
        <HeadingIII
          title="What others are saying"
          color="text-[#232129]"
        />
        <Testimonial />
        <RecommendedPostSection />
        {/* <NewsletterHome /> */}
      </main>
    </Layout>
  );
};

export default Home;
