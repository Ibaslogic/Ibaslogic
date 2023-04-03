const SocialLink = ({ link, text }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      title={text}
      className="underline"
    >
      {text}
    </a>
  );
};

export default SocialLink;
