import React from "react"
import Layout from "../components/layout"
import blogStyles from "../components/BlogPage/blogItems.module.scss"

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
      <main className={blogStyles.main} role="main">
        <div className={blogStyles.container}>
          <div className={blogStyles.filterPosts}>
            <p>All Tags</p>
          </div>
          <ul style={{ margin: 0 }}>
            {group.map(tag => (
              <li className={blogStyles.tagList} key={tag.fieldValue}>
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
