import Layout from '../components/Layout/Layout';
import AboutContent from '../components/About/AboutContent';

const About = () => {
  return (
    <Layout
      title="About Ibas"
      description="Ibas Majid is a web developer, teacher and a writer. He specializes in developing realistic websites and web applications using the latest tools and tech. He also writes technical contents around this subject."
    >
      <main className="w-full pt-12 pb-20 px-[15px] mx-auto max-w-3xl lg:max-w-4xl">
        <AboutContent />
      </main>
    </Layout>
  );
};

export default About;
