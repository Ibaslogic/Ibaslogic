import React from "react"
// import {
//   // FaFacebookSquare,
//   // FaGithub,
//   // FaLinkedin,
//   FaTwitter,
// } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import socialStyles from "./contact.module.scss"

const ContactSocial = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          twitterHandle
        }
      }
    }
  `)
  return (
    <p className={socialStyles.content}>
      ...Or you can connect with{" "}
      <a
        href={`https://twitter.com/${data.site.siteMetadata.twitterHandle}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ibas on Twitter
      </a>
    </p>
  )
}

export default ContactSocial
