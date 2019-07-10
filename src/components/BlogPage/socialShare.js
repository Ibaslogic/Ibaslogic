import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { slugify } from "../../util/utilityFunction"
import shareStyles from "./socialShare.module.scss"
import {
  FaFacebookF,
  // FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa"

const SocialShare = ({ slug, title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          twitterHandle
        }
      }
    }
  `)

  const baseUrl = "https://ibaslogic.netlify.com/blog/"
  const twitterHandle = data.site.siteMetadata.twitterHandle

  return (
    <div className={shareStyles.container}>
      <p className={shareStyles.shareTitle}>share this</p>
      <div className={shareStyles.socialShare}>
        <ul>
          <li>
            <a
              className={shareStyles.twitter}
              target="_blank"
              rel="noopener noreferrer"
              href={
                "https://twitter.com/share?url=" +
                baseUrl +
                slugify(slug) +
                "/&text=" + 
                title +
                "&via=" +
                twitterHandle
              }
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              className={shareStyles.facebook}
              target="_blank"
              rel="noopener noreferrer"
              href={
                "https://www.facebook.com/sharer/sharer.php?u=" +
                baseUrl +
                slugify(slug) +
                "/"
              }
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a
              className={shareStyles.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              href={
                "https://www.linkedin.com/shareArticle?url=" +
                baseUrl +
                slugify(slug) +
                "/"
              }
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SocialShare

// import { FaFacebookF } from "react-icons/fa";
// FaFacebookF   FaFacebookSquare    FaFacebook
// FaGithub FaGithubSquare
// FaGooglePlusG FaGooglePlusSquare
// FaLinkedinIn FaLinkedin
// FaPinterestP  FaPinterestSquare
// FaTwitter   FaTwitterSquare
// <h3> Lets go for a <FaFacebookF />? </h3>
