import React from "react"
import Img from "gatsby-image"
import articleStyles from "./ArticlePage/articlePage.module.scss"
import { Link } from "gatsby"

const Article = ({ title, updated, excerpt, tags, posted, time, fixed, slug }) => {
  return (
    <li className={`list_item ${articleStyles.listItem}`}>
      <Link to={`/${slug}/`}>
        <article className={articleStyles.article}>
          <div className={articleStyles.entryHeader}>
            {fixed && <Img
              fixed={fixed}
              alt={slug}
              fadeIn={false}
              loading="eager"
              backgroundColor="#eaeaea"
              className={articleStyles.imgWrapper}
            />}
          </div>
          <div className={articleStyles.entryTitle}>
            <h2>{title}</h2>
          </div>
          <div className={articleStyles.entryContent}>
            <p>{excerpt}</p>
          </div>
          <div className={`bg_dm_wc ${articleStyles.meta}`}>
            {updated === posted ? " Posted " : "Updated"} on{" "}
            <span> {updated} </span>
            <span className={articleStyles.divider}> </span>
            <span className={articleStyles.time}> {time} min read </span>
          </div>
        </article>
      </Link>
    </li>
  )
}

export default Article
