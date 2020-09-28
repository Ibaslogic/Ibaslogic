import React from "react"
import { Link } from "gatsby"
import { slugify } from "../../util/utilityFunction"
import recentPostStyles from "./sidebar.module.scss"

const SidebarPostMarkup = ({ tags, title, slug }) => {
  return (
    <li>
      <Link to={`/${slugify(slug)}/`}>
        {title}
        <div className={`tag__container ${recentPostStyles.tagContainer}`}>
          {tags.map((tag, index) => (
            <span key={index} className={recentPostStyles.hashContainer}>
              <span>#</span>
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </li>
  )
}

export default SidebarPostMarkup
