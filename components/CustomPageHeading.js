import React from 'react';

const CustomPageHeading = ({ title }) => {
  return (
    <div className="pt-12">
      <div className="mx-auto max-w-3xl lg:max-w-[77rem] px-[20px]">
        <h1 className="text-4xl text-[#1a2c47] lg:text-[2.5rem] font-semibold tracking-[-.07rem] !leading-[1.2]">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default CustomPageHeading;
