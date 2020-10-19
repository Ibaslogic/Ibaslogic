import React from "react"
import {
  FaPhone,
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
    <footer className={`bg_dm ${footerStyles.siteFooter}`}>
      <div className={footerStyles.container}>
        <div className={`dmWhite ${footerStyles.ftTop}`}> 
          <div className={footerStyles.getInTouch}>
            <h2 className={footerStyles.heading}>Need a consultation?</h2>
            <p>Then let's talk! We are here to provide you the best service.</p>
            <div className={footerStyles.contact}>
              <Link
                className={`btn-primary ${footerStyles.btnPrimary}`}
                to="/contact/"
                target="_blank"
                title="Get in touch"
              >
                contact us
              </Link>
            </div>
          </div>
          <div className={footerStyles.services}>
            <h2 className={footerStyles.heading}>Services</h2>
            <ul className={footerStyles.serviceList}>
              <li>Web Development Services</li>
              <li>Technical Content Writing</li>
              <li>Digital Marketing Services</li>
            </ul>
          </div>
          <div className={footerStyles.site}>
            <h2 className={footerStyles.heading}>Site</h2>
            <div className={footerStyles.siteContent}>
              <p>
                <a
                  href={`https://github.com/${data.site.siteMetadata.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="github"
                >
                  open source
                </a>
              </p>
              <p>
                <a
                  href={`${data.site.siteMetadata.siteUrl}/rss.xml`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RSS
                </a>
              </p>
            </div>
          </div>
          <div className={footerStyles.connect}>
            <h2 className={footerStyles.heading}>Connect</h2>
            <p className={footerStyles.mailContainer}>
              <FaEnvelope />{" "}
              <a
                className={footerStyles.mail}
                href={`mailto:${data.site.siteMetadata.email}`}
              >
                ibas@ibaslogic.com
              </a>
            </p>
            <div className={footerStyles.numContainer}>
              <FaPhone />
              <span className={footerStyles.number}>+234 81 3954 2386</span>
            </div>
          </div>
        </div>
        <div className={`border_dm ${footerStyles.ftBottom}`}>
          <p className={footerStyles.copy}>
            Designed and developed by{" "}
            <a
              href={`https://twitter.com/${data.site.siteMetadata.twitterHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              title="twitter"
            >
              {data.site.siteMetadata.author}
            </a>{" "}
            {new Date().getFullYear().toString()}
          </p>
          <div className={footerStyles.social}>
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
      </div>
    </footer>
  )
}

export default Footer
