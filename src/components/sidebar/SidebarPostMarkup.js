import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { slugify } from "../../util/utilityFunction"
import recentPostStyles from "./sidebar.module.scss"

const SidebarPostMarkup = ({ fixed, title, slug }) => {
  return (
    <li>
      <Link to={`/${slugify(slug)}/`}>
        <Img className={recentPostStyles.imgTumbnail} fixed={fixed} fadeIn={false}
          loading="eager" />
        <span>{title}</span>
      </Link>
    </li >
  )
}

export default SidebarPostMarkup
