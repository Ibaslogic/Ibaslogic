const SocialItem = ({ Icon, text, link, title, style }) => {
  return (
    <a
      className={`p-2 h-10 w-10 mt-[3px] text-black opacity-80 ${style}`}
      href={link}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      {Icon ? <Icon /> : text}
    </a>
  );
};

export default SocialItem;
