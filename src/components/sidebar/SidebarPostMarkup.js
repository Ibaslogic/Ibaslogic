import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { slugify } from "../../util/utilityFunction"
import recentPostStyles from "./sidebar.module.scss"

const SidebarPostMarkup = ({ fluid, title, slug }) => {
  return (
    <Link to={`/blog/${slugify(slug)}`}>
      <li>
        <Img className={recentPostStyles.imgTumbnail} fluid={fluid} />
        <span>{title}</span>
      </li>
    </Link>
  )
}

export default SidebarPostMarkup
