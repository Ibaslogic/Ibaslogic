import Image from 'next/image';

import testimonials from '../../data/testimonials';
const Testimonial = () => {
  return (
    <section className="py-24">
      <div>
        {testimonials.map((testimonial) => {
          const { image, name, feedback, title } = testimonial;
          return (
            <div key={name} className="pb-11 px-[20px]">
              <div className="text-center w-full flex justify-center items-center flex-col border border-[#e6e6e6] max-w-xl md:max-w-[720px] lg:max-w-[950px] mx-auto mt-12 md:mt-24 px-4 py-10 md:py-12 md:px-10 lg:px-16">
                <div className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] mt-[-90px] mb-[30px] md:mt-[-160px]">
                  <Image
                    width={200}
                    height={200}
                    src={image}
                    className="block object-cover rounded-full bg-gray-200 h-full"
                    alt={name}
                  />
                </div>
                <p className="text-base md:text-[1.2rem] !leading-[1.7] mb-6 md:mb-7">
                  {feedback}
                </p>
                <p className="font-bold">{name}</p>
                <p>{title}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* </div> */}
      {/* </div> */}
    </section>
  );
};

export default Testimonial;
