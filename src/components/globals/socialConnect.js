import React from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa"
import footerStyles from "./footer.module.scss"

const SocialConnect = ({twitterHandle, linkedin, github}) => {
  return (
    <div className={footerStyles.social}>
       <ul className={footerStyles.socialList}>
          <li className={footerStyles.socialItem}>
            <a
              href={`https://twitter.com/${twitterHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              title="twitter"
            >
              <FaTwitter />
            </a>
          </li>

          <li className={footerStyles.socialItem}>
            <a
              href={`https://www.linkedin.com/in/${linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              title="linkedin"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className={footerStyles.socialItem}>
            <a
              href={`https://github.com/${github}`}
              target="_blank"
              rel="noopener noreferrer"
              title="github"
            >
              <FaGithub />
            </a>
          </li>
       </ul>
    </div>
  )
}
export default SocialConnect
