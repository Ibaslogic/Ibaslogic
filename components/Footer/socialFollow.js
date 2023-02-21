import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaBullseye,
} from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

import config from '../../data/siteMetadata.js';

const SocialFollow = () => {
  const { github, linkedin, twitterShare, email } = config;

  const social = [
    { name: 'twitter', link: `https://twitter.com/${twitterShare}` },
    {
      name: 'linkedin',
      link: `https://www.linkedin.com/in/${linkedin}/`,
    },
    { name: 'github', link: `https://github.com/${github}` },
    { name: 'email', link: `mailto:${email}` },
  ];

  return (
    <ul className="flex flex-wrap justify-center gap-16 sm:gap-40">
      {social.map((element) => {
        const { name, link } = element;
        const socialIcon =
          name === 'linkedin' ? (
            <FaLinkedin />
          ) : name === 'twitter' ? (
            <FaTwitter />
          ) : name === 'github' ? (
            <FaGithub />
          ) : name === 'email' ? (
            <AiOutlineMail />
          ) : (
            //generic icon
            <FaBullseye />
          );

        return (
          <li
            className="text-2xl hover:opacity-75 transition"
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
