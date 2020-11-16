import React from "react"
import Layout from "../components/layout"
import styles from "../templates/tags.module.scss"
import kebabCase from "lodash/kebabCase"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"

const Tagspage = ({
  data: {
    allMdx: { group },
  },
}) => {
  return (
    <Layout>
      <SEO title="All tags" description="All tags" />
      <main className={styles.main} role="main">
        <div className={styles.container}>
          <h1 className={styles.description}>All Tags</h1>
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
    allMdx {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
