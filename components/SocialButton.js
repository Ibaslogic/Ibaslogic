const SocialButton = ({ link, Icon, label, className }) => {
  return (
    <a
      className={`justify-center flex items-center space-x-1 my-0 font-medium ${className}`}
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
