import React from "react"
import { Link } from "gatsby"
import { slugify } from "../../util/utilityFunction"

import styles from "./tagLinks.module.scss"

const TagLinks = ({ tags }) => {
  return (
    <ul className={styles.list}>
      {tags.map((tag, index) => (
        <li key={index}>
          <Link to={`/tags/${slugify(tag)}/`}>{tag}</Link>
        </li>
      ))}
    </ul>
  )
}
export default TagLinks


