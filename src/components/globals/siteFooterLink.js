import React from "react"
import footerStyles from "./footer.module.scss"
import { Link } from "gatsby"

const SiteFooterLink = ({ github, siteUrl }) => {
  return (
    <ul className={footerStyles.list}>
      {/* <li>
        <a
          href="https://ko-fi.com/ibasmajid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Support Me
        </a>
      </li> */}
      <li>
        <a
          href={`https://github.com/${github}/Ibaslogic`}
          target="_blank"
          rel="noopener noreferrer"
          title="contribute"
        >
          Open Source
        </a>
      </li>
      <li>
        <a
          href="https://ibaslogic.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="Sign up"
        >
          Newsletter
        </a>
      </li>
      <li>
        <a
          href={`${siteUrl}/rss.xml`}
          target="_blank"
          rel="noopener noreferrer"
        >
          RSS
        </a>
      </li>
      <li>
        <Link to="/privacy">privacy</Link>
      </li>
      <li>
        <Link to="/terms/">Terms of Service</Link>
      </li>
    </ul>
  )
}
export default SiteFooterLink
