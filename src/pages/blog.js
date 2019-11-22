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
      <SEO title="Blog Articles" />
      <BlogItems items={data} />
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query {
    allMdx(sort: { fields: [fields___slug___modifiedTime], order: DESC }) {
      edges {
        node {
          id
          parent {
            ... on File {
              modifiedTime(fromNow: true)
            }
          }
          frontmatter {
            title
            category
            featured {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
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
