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
    allContentfulBlogPostContent(sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          id
          title
          slug
          publishedDate(formatString: "MMMM Do YYYY")
          category
          timeToRead
          image {
            fluid(maxWidth: 460) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
