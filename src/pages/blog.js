import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
//import Post from "../components/post"

import SEO from "../components/seo"
//import Hero from "../components/hero"
import BlogItems from "../components/BlogPage/blogItems"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Comprehensive Guides"
        description="Read our step-by-step guides and start learning the tools and strategy required for your next web project."
      />
      <BlogItems items={data} />
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___dateUpdated], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            category
            datePublished(formatString: "MMMM Do, YYYY")
            dateUpdated(formatString: "MMMM Do, YYYY")
            featured {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_noBase64
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
        }
      }
    }
  }
`
