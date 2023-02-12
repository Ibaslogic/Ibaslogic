const HeadingIII = ({ title, color }) => {
  return (
    <h2
      className={`${
        color ? color : 'text-black'
      } text-[27px] font-bold tracking-[-.07rem] !leading-[1.2] mt-20 text-center`}
    >
      {title}
    </h2>
  );
};

export default HeadingIII;
