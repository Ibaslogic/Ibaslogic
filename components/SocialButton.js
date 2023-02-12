const SocialButton = ({ link, Icon, label, className }) => {
  return (
    <a
      className={className}
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span>
        <Icon />
      </span>
      <span>{label}</span>
    </a>
  );
};

export default SocialButton;
