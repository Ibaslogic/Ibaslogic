import React from "react"
import styles from "./postList.module.scss"
import { Link } from "gatsby"

const PostList = ({ title, updated, posted, time, slug }) => {
  return (
    <li className={`list_item ${styles.listItem}`}>
      <Link to={`/${slug}/`}>
        <div className={styles.content}>
          <h2 className={styles.entryTitle}>{title}</h2>
          <div className={`bg_dm_wc ${styles.meta}`}>
            {updated === posted ? " Posted " : "Updated"} on{" "}
            <span> {updated} </span>
            <span className={styles.divider}> </span>
            <span className={styles.time}> {time} min read </span>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default PostList
