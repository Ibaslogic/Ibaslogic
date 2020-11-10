import React from "react"
import styles from "./postList.module.scss"
import { Link } from "gatsby"
import TagLinks from "../tagLinks/tagLinks"

const PostList = ({ title, excerpt, tags, time, slug }) => {
  return (
    <li className={`list_item ${styles.listItem}`}>
      <div className={styles.content}>
        <h2 className={styles.entryTitle}><Link to={`/${slug}/`}>{title}</Link></h2>
        {excerpt && <div className={styles.excerpt}><p>{excerpt}</p><span className="shadow"><Link to={`/${slug}/`}>(more)</Link></span></div>}
        <div className={`bg_dm_wc ${styles.meta}`}>
          {tags && <TagLinks tags={tags} />}
          <span className={styles.time}><span className={styles.divider}> </span> {time} min read </span>
        </div>

      </div>
    </li>
  )
}

export default PostList
