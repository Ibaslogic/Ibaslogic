import ContactForm from './ContactForm';
import CustomPageHeading from '../CustomPageHeading';
import SocialFollow from '../Footer/socialFollow';

const ContactContent = () => {
  const displayForm = true;
  return (
    <>
      <CustomPageHeading
        title="Let's talk"
        description="Do you want to talk about your project or have a question
            for me? Use the form below to get in touch."
      />
      <div className="py-12 contact px-[15px] mx-auto max-w-3xl">
        {displayForm && <ContactForm />}
      </div>
      <section className="pb-12">
        <div className="py-12 contact px-[15px] mx-auto max-w-3xl text-center">
          <h2 className="text-black mb-16 font-normal text-2xl sm:text-3xl">
            Or connect with Ibas on...
          </h2>
          <SocialFollow />
        </div>
      </section>
    </>
  );
};

export default ContactContent;
