import Layout from '../components/Layout/Layout';
import CustomPageHeading from '../components/CustomPageHeading';
import Privacy from '../components/privacy';

const PrivacyNotice = () => (
  <Layout title="Privacy policy" description="Privacy page">
    <main className="w-full ">
      <CustomPageHeading
        title="Privacy policy"
        description="Thank you for visiting Ibaslogic.com."
      />
      <section className="pt-12 pb-12 text-gray-600 px-[15px] mx-auto max-w-3xl">
        <Privacy />
      </section>
    </main>
  </Layout>
);

export default PrivacyNotice;
