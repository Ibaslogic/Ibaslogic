import React from "react"
import Img from "gatsby-image"
import articleStyles from "./ArticlePage/articlePage.module.scss"
import { Link } from "gatsby"
import TagLinks from "./tagLinks/tagLinks"

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
          <h2 className={articleStyles.entryTitle}>{title}</h2>
          <div className={articleStyles.content}>
            <p>{excerpt}</p>
          </div>
          <div className={`bg_dm_wc ${articleStyles.meta}`}>
            <div className={articleStyles.posted}>
              {updated === posted ? " Posted " : "Updated"} on{" "}
              <span> {updated} </span>
              <span className={articleStyles.divider}> </span>
              <span className={articleStyles.time}> {time} min read </span>
            </div>
            <div className={articleStyles.tags}>
              {tags && <TagLinks tags={tags} />}
            </div>
          </div>
        </article>
      </Link>
    </li>
  )
}

export default Article
