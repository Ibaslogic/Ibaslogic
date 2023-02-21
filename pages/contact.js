import Layout from '../components/Layout/Layout';
import ContactContent from '../components/Contact/ContactContent';

const Contact = () => {
  return (
    <Layout
      title="Get in touch with Ibas"
      description="Want to talk about your project? Or have a question for me? Send me an email and I will get back to you shortly."
    >
      <main className="w-full">
        <ContactContent />
      </main>
    </Layout>
  );
};

export default Contact;
