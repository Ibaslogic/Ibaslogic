import Subscribe from '../Newsletter/Subscribe';

const NewsletterHome = () => {
  return (
    <section className=" pt-12 pb-24 lg:py-36">
      <div className="px-[20px] mx-auto max-w-5xl flex flex-col items-center md:flex-row md:justify-between">
        <div className="text-center mb-6 md:text-left md:mb-0 md:max-w-lg md:mt-[-15px]">
          <h3 className="text-[2rem] md:text-[42px] tracking-[-1px] leading-tight md:leading-[1.1] mb-3 font-bold">
            Get Exclusive Dev Knowledge
          </h3>
          <p>
            Keep up to date with the latest web development tips,
            tricks and actionable guides.
          </p>
        </div>
        <Subscribe />
      </div>
    </section>
  );
};

export default NewsletterHome;
