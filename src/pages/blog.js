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
      <SEO title="Blog" />
      <BlogItems items={data} />
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM Do YYYY")
            category
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          timeToRead
        }
      }
    }
  }
`
