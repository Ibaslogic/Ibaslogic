import React from 'react'

// import Img from "gatsby-image"
import { Link } from "gatsby"
import { FaRegClock } from "react-icons/fa";

import metaStyle from "./meta.module.scss"

const PostMeta = ({ datePublished, dateUpdated, timeToRead, title, isSeries }) => {
  return (
    <div className={`post__meta ${metaStyle.postMeta}`}>
      {
        isSeries && (
          <div className={metaStyle.breadcrumbs}>
            <span><Link to="/">Home</Link></span><span> » </span><span><Link to="/series/">Series</Link></span><span> » </span><span>{title}</span>
          </div>
        )
      }
      {
        !isSeries && (
          <div className={metaStyle.date}>
            {datePublished === dateUpdated ? "Published " : "Updated "}
            {dateUpdated}
          </div>

        )
      }

      <div className={metaStyle.time}>
        <FaRegClock /> {timeToRead} min read
      </div>
    </div>
  )
}
export default PostMeta