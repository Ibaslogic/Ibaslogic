import React from "react"
import { Link } from "gatsby"
import { slugify } from "../../../util/utilityFunction"
import relatedPostStyles from "./relatedArticles.module.scss"
import { FaGripfire } from "react-icons/fa" //FaFire

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
                  <FaGripfire />
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
