import React from "react"
import Layout from "../components/layout"
import Post from "../components/post"
import SEO from "../components/seo"
import blogStyles from "../components/BlogPage/blogItems.module.scss"
import { graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allContentfulBlogPostContent
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <SEO title="tags" />
      <main className={blogStyles.main} role="main">
        <div className={blogStyles.container}>
          <div className={blogStyles.filterPosts}>
            <p>{tagHeader}</p>
          </div>
          <ul className={blogStyles.list}>
            {edges.map(({ node }) => {
              const { id, slug, title, publishedDate, image, timeToRead } = node
              return (
                <Post
                  key={id}
                  title={title}
                  date={publishedDate}
                  time={timeToRead}
                  fluid={image.fluid}
                  slug={slug}
                />
              )
            })}
          </ul>
        </div>
      </main>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allContentfulBlogPostContent(
      sort: { fields: publishedDate, order: DESC }
      filter: { tags: { in: [$tag] } }
    ) {
      totalCount
      edges {
        node {
          id
          slug
          timeToRead
          title
          publishedDate(formatString: "MMMM Do, YYYY")
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
