import React from "react"
import Layout from "../components/layout"
import styles from "../templates/tags.module.scss"
import kebabCase from "lodash/kebabCase"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"

const Tagspage = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title="All tags" />
      <main className={styles.main} role="main">
        <div className={styles.container}>
          <h3 className={styles.description}>All Tags</h3>
          <ul className={`tag__list__container ${styles.list2}`}>
            {group.map(tag => (
              <li className={styles.item2} key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  )
}

export default Tagspage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
