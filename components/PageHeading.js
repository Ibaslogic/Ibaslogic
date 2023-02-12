const PageHeading = ({ title }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold tracking-tight text-black mb-[0.5em] lg:mt-8 text-[35px] leading-[1.25] md:leading-[1.1] md:text-[38px] lg:text-[40px]">
        {title}
      </h1>
    </div>
  );
};

export default PageHeading;
