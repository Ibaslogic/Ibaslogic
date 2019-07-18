import React from "react"
import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa"
import socialStyles from "./contact.module.scss"

const ContactSocial = () => {
  return (
    <div className={socialStyles.social}>
      <ul className={socialStyles.socialList}>
        <li className={socialStyles.socialItem}>
          <h4>twitter</h4>
          <a
            href="https://twitter.com/ibaskunle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
        <li className={socialStyles.socialItem}>
          <h4>facebook</h4>
          <a
            href="https://www.facebook.com/ibaskunle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare />
          </a>
        </li>

        <li className={socialStyles.socialItem}>
          <h4>linkedin</h4>
          <a
            href="https://www.linkedin.com/in/ibaskunle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className={socialStyles.socialItem}>
          <h4>github</h4>
          <a
            href="https://github.com/Ibaslogic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ContactSocial
