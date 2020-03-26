import React from "react"
import { Link } from "gatsby"
import { slugify } from "../../../util/utilityFunction"
import relatedPostStyles from "./relatedArticles.module.scss"
import { FaFire } from "react-icons/fa"

const RelatedArticles = ({ articles }) => {
  return (
    <div className={relatedPostStyles.listContainer}>
      <h3 className={relatedPostStyles.subTitle}>Closely Related Posts</h3>
      <ul>
        {articles.map(article => (
          <li key={article.node.id}>
            <Link to={`/blog/${slugify(article.node.fields.slug.name)}/`}>
              <span>
                <span className={relatedPostStyles.hot}>
                  <FaFire />
                </span>{" "}
                {article.node.frontmatter.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RelatedArticles
