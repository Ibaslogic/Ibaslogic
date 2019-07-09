import React from "react"
import titleStyles from "./recentPosts.module.scss"

const SubHeading = props => {
  return (
    <div className={titleStyles.sectionHeader}>
      <h2 className={titleStyles.sectionTitle}>{props.title}</h2>
    </div>
  )
}

export default SubHeading
