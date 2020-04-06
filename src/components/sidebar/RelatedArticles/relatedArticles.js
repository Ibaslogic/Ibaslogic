import React from "react"
import { Link } from "gatsby"
import { slugify } from "../../../util/utilityFunction"
import relatedPostStyles from "./relatedArticles.module.scss"
// import { FaFire } from "react-icons/fa" //FaHotjar FaFire
// import flame from "../../../images/flame.svg"

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
                  {/* <FaFire /> */}
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path
                      fill="#ff704d"
                      fill-rule="evenodd"
                      stroke="none"
                      stroke-width="1"
                      id="Icon/small/flame"
                      d="M12.654 21c-4.797 0-6.659-4.266-6.139-7.166.414-2.308 1.85-3.773 3.2-5.15 1.392-1.42 1.856-2.842 1.39-5.368 1.737 1.028 3.369 2.764 4.18 4.42.6 1.223.886 1.807 2.09 2.188.096.03.391.265.433.354 2.52 5.39.226 10.722-5.154 10.722zm2.632-3.79c.899-.77.908-2.819-.017-3.723-.032.224-.034.348-.069.465-.166.56-.973 1.065-1.46.872-.723-.285-.576-.821-.41-1.326.064-.194.18-.383.314-.55.527-.657.568-1.4.466-2.14-.099-.719-.669-1.512-1.61-2.124.425 1.141.143 1.886-.57 2.481-.49.409-.92.87-1.38 1.306-1.276 1.21-1.306 3.611.093 4.74 1.171.944 3.379 1.084 4.643 0z"
                    ></path>
                  </svg>
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
