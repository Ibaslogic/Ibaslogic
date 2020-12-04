import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticlePage from "../components/ArticlePage/articlePage"

const Articles = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Comprehensive articles"
        description="This page showcases our step-by-step articles."
      />
      <ArticlePage items={data} />
    </Layout>
  )
}

export default Articles

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___dateUpdated], order: DESC }
      filter: { fields: { collection: { eq: "articles" } } }
      ) {
      edges {
        node {
          id
          frontmatter {
            title
            category
            tags
            datePublished(formatString: "MMMM DD, YYYY")
            dateUpdated(formatString: "MMMM DD, YYYY")
            featured {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
          fields {
            slug {
              name
            }
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`
