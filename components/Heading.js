const Heading = ({ title, desc, color }) => {
  return (
    <div className="custom_heading">
      <h2
        className={`${
          color ? color : 'text-black'
        } font-bold text-2xl md:text-3xl tracking-tight`}
      >
        {title}
      </h2>
      {desc && <p className="text-[#36313d] mt-4">{desc}</p>}
    </div>
  );
};

export default Heading;
