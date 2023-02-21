import React from 'react';

const CustomPageHeading = ({ title, description }) => {
  return (
    <section className="py-14 bg-[#fff] text-[#696969] border-b border-solid border-[#f0f0f2]">
      <div className="mx-auto max-w-3xl px-[15px] text-center">
        <h1 className="text-4xl text-black lg:text-[2.5rem] font-semibold tracking-[-.07rem] !leading-[1.2] mb-6">
          {title}
        </h1>
        <p className="font-light max-w-[360px] sm:max-w-xl mx-auto text-[17px]">
          {description}
        </p>
      </div>
    </section>
  );
};

export default CustomPageHeading;
