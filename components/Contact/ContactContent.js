import ContactForm from './ContactForm';
import CustomPageHeading from '../CustomPageHeading';
import SocialFollow from '../Footer/socialFollow';

const ContactContent = () => {
  const displayForm = true;
  return (
    <>
      <CustomPageHeading
        title="Let's talk"
        description="Hey there! Have a project you're excited to discuss or a question burning in your mind? Don't hesitate to reach out using the form below."
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
