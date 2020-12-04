import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SeriesItems from "../components/SeriesPage/SeriesItems"

const SeriesPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Comprehensive Guides"
        description="Read our step-by-step guides and start learning the tools and strategy required for your next web project."
      />
      <SeriesItems items={data} />
    </Layout>
  )
}

export default SeriesPage

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___dateUpdated], order: DESC }
      filter: { fields: { collection: { eq: "series" } } }
      ) {
      edges {
        node {
          id
          frontmatter {
            title
            category
          }
          fields {
            slug {
              name
            }
          }
          timeToRead
        }
      }
    }
  }
`
