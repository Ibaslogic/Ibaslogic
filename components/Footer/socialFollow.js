import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaBullseye,
} from 'react-icons/fa';

import config from '../../data/siteMetadata.js';

const SocialFollow = () => {
  const { github, linkedin, twitterShare } = config;

  const social = [
    { name: 'twitter', link: `https://twitter.com/${twitterShare}` },
    {
      name: 'linkedin',
      link: `https://www.linkedin.com/in/${linkedin}/`,
    },
    { name: 'github', link: `https://github.com/${github}` },
  ];

  return (
    <ul className="flex flex-wrap">
      {social.map((element) => {
        const { name, link } = element;
        const socialIcon =
          name === 'linkedin' ? (
            <FaLinkedin />
          ) : name === 'twitter' ? (
            <FaTwitter />
          ) : name === 'github' ? (
            <FaGithub />
          ) : (
            //generic icon
            <FaBullseye />
          );

        return (
          <li
            className="mr-6 mb-2 lg:mb-0 text-2xl last:mr-0 hover:opacity-75 transition"
            key={name}
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              title={name}
            >
              {socialIcon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialFollow;
