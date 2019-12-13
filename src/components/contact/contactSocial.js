import React from "react"
import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import socialStyles from "./contact.module.scss"

const ContactSocial = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          twitterHandle
          linkedin
          facebook
          github
        }
      }
    }
  `)
  return (
    <div className={socialStyles.social}>
      <ul className={socialStyles.socialList}>
        <li className={socialStyles.socialItem}>
          <h4>twitter</h4>
          <a
            href={`https://twitter.com/${data.site.siteMetadata.twitterHandle}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
        <li className={socialStyles.socialItem}>
          <h4>facebook</h4>
          <a
            href={`https://www.facebook.com/${data.site.siteMetadata.facebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare />
          </a>
        </li>

        <li className={socialStyles.socialItem}>
          <h4>linkedin</h4>
          <a
            href={`https://www.linkedin.com/in/${data.site.siteMetadata.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className={socialStyles.socialItem}>
          <h4>github</h4>
          <a
            href={`https://github.com/${data.site.siteMetadata.github}`}
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
