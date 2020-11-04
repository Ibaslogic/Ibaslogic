import React from "react"
import { Link } from "gatsby"
import { slugify } from "../../util/utilityFunction"

const SidebarPostMarkup = ({ title, slug }) => {
  return (
    <li>
      <Link to={`/${slugify(slug)}/`}>
        {title}
      </Link>
    </li>
  )
}

export default SidebarPostMarkup
