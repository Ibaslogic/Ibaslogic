const AboutSection = ({ section }) => {
  return (
    <div className="prose max-w-full">
      {section.map(({ content }) => (
        <p
          key={content}
          dangerouslySetInnerHTML={{ __html: content }}
        ></p>
      ))}
    </div>
  );
};

export default AboutSection;
