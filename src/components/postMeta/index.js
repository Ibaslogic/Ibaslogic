import React from 'react'

// import Img from "gatsby-image"
import { Link } from "gatsby"
import { FaRegClock } from "react-icons/fa";

import metaStyle from "./meta.module.scss"

const PostMeta = ({ datePublished, dateUpdated, timeToRead, title, isSeries }) => {
  return (
    <div className={`post__meta ${metaStyle.postMeta}`}>
      <div className={metaStyle.breadcrumbs}>
        <span><Link to="/">Home</Link></span><span> » </span>
        <span>
          {
            isSeries && (
              <Link to="/series/">Series</Link>
            )
          }
          {
            !isSeries && (
              <Link to="/blog/">Articles</Link>
            )
          } 
          </span><span> » </span> <span className={metaStyle.bcTitle}>{title}</span>
      </div>
      <div className={metaStyle.time}>
        <FaRegClock /> {timeToRead} min read
      </div>
    </div>
  )
}
export default PostMeta