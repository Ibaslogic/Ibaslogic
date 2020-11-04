import React from 'react'
import { FaPencilAlt } from "react-icons/fa"
import Img from "gatsby-image"
import { Link } from "gatsby"

import metaStyle from "./meta.module.scss"

 const PostMeta = ({ datePublished, dateUpdated, timeToRead, pageContext, authorAvatar, isSeries }) => {
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
        Ibas<span className={metaStyle.divider}></span>
      </Link>}              
      <span className={metaStyle.inlineBlockStyle}>
        {datePublished === dateUpdated ? " Published " : "Updated"} on{" "}
        {dateUpdated}
      </span>
      <span className={metaStyle.divider}></span>
      <span className={metaStyle.inlineBlockStyle}>
        {timeToRead} min read
      </span>
      <span className={metaStyle.divider}></span>
      <span className={metaStyle.inlineBlockStyle}>
        <a
          className={`edit__post ${metaStyle.editPost}`}
          href={
            `https://github.com/Ibaslogic/Ibaslogic/blob/master/src/contents/${isSeries ? "series" : "articles"}/` +
            pageContext.postPath
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          Edit <FaPencilAlt />
        </a>
      </span>
    </div>
  )
}
export default PostMeta
