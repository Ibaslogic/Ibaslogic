import React from "react"
import titleStyles from "./recentPosts.module.scss"

const SubHeading = props => {
  return <h2 className={titleStyles.sectionTitle}>{props.title}</h2>
}

export default SubHeading
