import React from "react"
import shareStyles from "./shareItems.module.scss"
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa"

const ShareItems = ({ twitterHandle, slug, title, heading, siteUrl }) => {
  const baseUrl = `${siteUrl}/`

  return ( 
    <>
      <div className={`${shareStyles.container}`}>
        <p className={shareStyles.title}>{heading}</p>
          <ul className={shareStyles.list}>
            <li>
              <a
                className={shareStyles.twitter}
                target="_blank"
                title="twitter"
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
                title="facebook"
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
                title="linkedin"
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
    </>
  )
}

export default ShareItems
