import React from 'react'

import Img from "gatsby-image"
import { Link } from "gatsby"

import metaStyle from "./meta.module.scss"

const PostMeta = ({ datePublished, dateUpdated, timeToRead, authorAvatar, isSeries }) => {
  return (
    <div className={`post__meta ${metaStyle.postMeta}`}>
      {authorAvatar && <Link
        to="/about/"
        className={`author__avatar ${metaStyle.authorAvatar}`}
      >
        <span className={metaStyle.avatarContainer}>
          <Img
            fixed={authorAvatar.childImageSharp.fixed}
            alt={authorAvatar.relativePath}
            backgroundColor="#eaeaea"
            className={metaStyle.avatar}
          />
        </span>
        by Ibas<span className={metaStyle.divider}></span>
      </Link>}
      {
        !isSeries && (
          <>
            <span className={metaStyle.inlineBlockStyle}>
              {datePublished === dateUpdated ? " Published " : "Updated"}
              {dateUpdated}
            </span>
            <span className={metaStyle.divider}></span>
          </>
        )
      }

      <span className={metaStyle.inlineBlockStyle}>
        {timeToRead} min read
      </span>
    </div>
  )
}
export default PostMeta
