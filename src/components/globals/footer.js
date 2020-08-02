import React from "react"
import {
  // FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa"
import { useStaticQuery, graphql, Link } from "gatsby"

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
          email
        }
      }
    }
  `)
  return (
    <footer className={footerStyles.siteFooter}>
      <div className={footerStyles.container}>
        <div className={footerStyles.ftTop}>
          <div className={footerStyles.openSource}>
            <h3>Open Source Project</h3>
            <p>
              Use and modify{" "}
              <a
                href={`https://github.com/${data.site.siteMetadata.github}/Ibaslogic`}
                title="Open-source project"
                target="_blank"
                rel="noopener noreferrer"
              >
                site source code
              </a>{" "}
              (be creative). Also welcomes suggestions to improve this web
              project.
            </p>
            <div className={footerStyles.startHere}>
              <p>Don't know where to start? </p>
              <Link to="/about/" target="_blank" title="About Ibaslogic">
                Visit The About Page
              </Link>
            </div>
          </div>
          <div className={footerStyles.support}>
            <h3>Mail me</h3>
            <p>
              <FaEnvelope />{" "}
              <a href={`mailto:${data.site.siteMetadata.email}`}>ibas@ibaslogic.com</a>
            </p>
          </div>
          <div className={footerStyles.site}>
            <h3>Site</h3>
            <a
              href={`${data.site.siteMetadata.siteUrl}/rss.xml`}
              target="_blank"
              rel="noopener noreferrer"
            >
              RSS
            </a>
          </div>

          <div className={footerStyles.social}>
            {/* <h3 className={footerStyles.checkMe}>Connect</h3> */}
            <h3>Connect</h3>
            <ul className={footerStyles.socialList}>
              <li className={footerStyles.socialItem}>
                <a
                  href={`https://twitter.com/${data.site.siteMetadata.twitterHandle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="twitter"
                >
                  <FaTwitter />
                </a>
              </li>

              <li className={footerStyles.socialItem}>
                <a
                  href={`https://www.linkedin.com/in/${data.site.siteMetadata.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="linkedin"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li className={footerStyles.socialItem}>
                <a
                  href={`https://github.com/${data.site.siteMetadata.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="github"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={footerStyles.ftBottom}>
          <p className={footerStyles.copy}>
            Designed and developed by {data.site.siteMetadata.author} &copy;{" "}
            {new Date().getFullYear().toString()}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

// import { FaFacebookF } from "react-icons/fa";
// FaFacebookF   FaFacebookSquare    FaFacebook
// FaGithub FaGithubSquare
// FaGooglePlusG FaGooglePlusSquare
// FaLinkedinIn FaLinkedin
// FaPinterestP  FaPinterestSquare
// FaTwitter   FaTwitterSquare
// <h3> Lets go for a <FaFacebookF />? </h3>
