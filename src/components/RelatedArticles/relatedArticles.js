import React from "react"
import { Link } from "gatsby"
import { slugify } from "../../util/utilityFunction"
import styles from "./relatedArticles.module.scss"

const RelatedArticles = ({ articles }) => {
  return (
    <div className={styles.listContainer}>
      <h3 className={styles.subTitle}>
        Related Articles
      </h3>
      <ul className={styles.list}>
        {articles.map(article => (
          <li key={article.node.id}>
            <Link to={`/${slugify(article.node.fields.slug.name)}/`}>
              {article.node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RelatedArticles
