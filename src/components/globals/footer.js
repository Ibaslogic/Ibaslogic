import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SocialConnect from "./socialConnect"
import SiteFooterLink from "./siteFooterLink"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          twitterHandle
          linkedin
          github
          siteUrl
        }
      }
    }
  `)

  const {author, twitterHandle, linkedin, github, siteUrl} = data.site.siteMetadata
  return (
    <footer className={`bg_dm ${footerStyles.siteFooter}`}>
      <div className={`${footerStyles.container} ${footerStyles.content}`}>
        <SiteFooterLink siteUrl={siteUrl} github={github} twitterHandle={twitterHandle} author={author} />
        <SocialConnect twitterHandle={twitterHandle} linkedin={linkedin} github={github} /> 
      </div>
    </footer>
  )
}

export default Footer
