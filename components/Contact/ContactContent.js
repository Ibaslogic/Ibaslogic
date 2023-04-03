import ContactForm from './ContactForm';
import CustomPageHeading from '../CustomPageHeading';
import SocialFollow from '../Footer/socialFollow';

const ContactContent = () => {
  const displayForm = true;
  return (
    <>
      <div className="pt-12 text-center">
        <div className="mx-auto max-w-3xl lg:max-w-[77rem] px-[20px]">
          <h1 className="text-4xl lg:text-6xl text-[#1a2c47] lg:text-[2.5rem] font-semibold tracking-[-.07rem] !leading-[1.2]">
            Contact Ibas
          </h1>
          <p className="text-lg mt-3">
            Got a project or question on your mind? Let's talk! Use
            the form below to reach out to me.
          </p>
        </div>
      </div>
      <div className="py-12 contact px-[20px] mx-auto max-w-5xl">
        {displayForm && <ContactForm />}
      </div>
      <section className="pb-12 bg-[#1b1b1b]">
        <div className="py-12 contact px-[20px] mx-auto max-w-5xl text-center">
          <h2 className="text-white mb-16 font-normal text-2xl sm:text-3xl">
            Or connect with Ibas on...
          </h2>
          <SocialFollow />
        </div>
      </section>
    </>
  );
};

export default ContactContent;
