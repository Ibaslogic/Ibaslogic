import Layout from '../components/Layout/Layout';
import CustomPageHeading from '../components/CustomPageHeading';
import Terms from '../components/terms';

const TermsOfService = () => (
  <Layout
    title="Terms of service"
    description="Terms of service page"
  >
    <main className="w-full ">
      <CustomPageHeading
        title="Terms of service"
        description="These terms and conditions outline the rules and regulations for the use of ibaslogic.com's Website."
      />
      <section className="pt-12 pb-12 text-gray-600 px-[15px] mx-auto max-w-3xl lg:max-w-4xl">
        <Terms />
      </section>
    </main>
  </Layout>
);

export default TermsOfService;
