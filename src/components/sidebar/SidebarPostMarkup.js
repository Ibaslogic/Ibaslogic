import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { slugify } from "../../util/utilityFunction"
import recentPostStyles from "./sidebar.module.scss"

const SidebarPostMarkup = ({ fixed, title, slug }) => {
  return (
    <Link to={`/${slugify(slug)}/`}>
      <li>
        <Img className={recentPostStyles.imgTumbnail} fixed={fixed} />
        <span>{title}</span>
      </li>
    </Link>
  )
}

export default SidebarPostMarkup
