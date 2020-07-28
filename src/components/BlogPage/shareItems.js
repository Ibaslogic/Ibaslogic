import React from "react"

//import { slugify } from "../../util/utilityFunction"
import shareStyles from "../../templates/blogpage.module.scss"
import {
  FaFacebookF,
  // FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa"

const ShareItems = ({
  twitterHandle,
  slug,
  title,
  heading,
  customClass,
  siteUrl,
}) => {
  const baseUrl = `${siteUrl}/`

  //console.log(slug, title, twitterHandle, customClass, siteUrl, baseUrl)

  return (
    <>
      <div className={`${customClass} ${shareStyles.shareContainer}`}>
        <p className={shareStyles.shareTitle}>{heading}</p>
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
                  slug +
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
                  slug +
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
                  slug +
                  "/"
                }
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ShareItems
