import React from "react"
import styles from "./postList.module.scss"
import { Link } from "gatsby"

const PostList = ({ title, time, slug }) => {
  return (
    <li className={`cg_dm ${styles.listItem}`}>
      <Link className={styles.link} to={`/${slug}/`}>
        <div className={styles.content}>
          <h2 className={styles.entryTitle}>{title}</h2>
          <span className={styles.time}> {time} min read </span>
        </div>
      </Link>
    </li >
  )
}

export default PostList

