import React from "react"
import { Link } from "gatsby"
import { slugify } from "../../../util/utilityFunction"
import relatedPostStyles from "./relatedArticles.module.scss"
//import { FaHotjar } from "react-icons/fa" //FaHotjar FaFire
import { FaSlackHash } from "react-icons/fa"
import flame from "../../../images/flame.svg"

const RelatedArticles = ({ articles }) => {
  return (
    <div className={`list__container ${relatedPostStyles.listContainer}`}>
      <h3 className={relatedPostStyles.subTitle}>
        Closely Related Posts{" "}
        <span className={relatedPostStyles.imageContainer}>
          <img src={flame} alt="" />
        </span>
      </h3>
      <ul>
        {articles.map(article => (
          <li key={article.node.id}>
            <Link to={`/${slugify(article.node.fields.slug.name)}/`}>
              <span>
                <span className={relatedPostStyles.hot}>
                  <FaSlackHash />
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
