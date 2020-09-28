import React from "react"
import Img from "gatsby-image"
import blogStyles from "./BlogPage/blogItems.module.scss"
import { Link } from "gatsby"

const Post = ({ title, updated, posted, time, excerpt, fluid, slug }) => {
  return (
    <li className={`list__item ${blogStyles.listItem}`}>
      <Link to={`/${slug}/`}>
        <article className="contentArticle">
          <header className={blogStyles.entryHeader}>
            <Img
              fluid={fluid}
              alt={slug}
              fadeIn={false}
              loading="eager"
              backgroundColor="#eaeaea"
              className={blogStyles.imgWrapper}
            />
          </header>
          <div className={blogStyles.postSummaryContent}>
            <h2 className={blogStyles.entryTitle}>{title}</h2>
            <div className={blogStyles.entryFooter}>
              {updated === posted ? " Posted " : "Updated"} on{" "}
              <span> {updated} </span>
              <span className={blogStyles.divider}> </span>
              <span className={blogStyles.time}> {time} min read </span>
            </div>
          </div>
        </article>
        {excerpt && (
          <div className={blogStyles.excerpt}>
            <div className={blogStyles.excerptInner}>
              <p>{excerpt}</p>
            </div>
          </div>
        )}
      </Link>
    </li>
  )
}

export default Post
