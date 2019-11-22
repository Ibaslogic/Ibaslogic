import React from "react"
import Layout from "../components/layout"
import Post from "../components/post"
import SEO from "../components/seo"
import blogStyles from "../components/BlogPage/blogItems.module.scss"
import { graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <SEO title={`All posts tagged as "${tag}"`} />
      <main className={blogStyles.main} role="main">
        <div className={blogStyles.container}>
          <div className={blogStyles.filterPosts}>
            <p>{tagHeader}</p>
          </div>
          <ul className={blogStyles.list}>
            {edges.map(({ node }) => {
              const { id, timeToRead } = node
              return (
                <Post
                  key={id}
                  title={node.frontmatter.title}
                  posted={node.fields.slug.birthTime}
                  updated={node.fields.slug.modifiedTime}
                  time={timeToRead}
                  fluid={node.frontmatter.featured.childImageSharp.fluid}
                  slug={node.fields.slug.name}
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
  query($tag: String!) {
    allMdx(
      sort: { fields: [fields___slug___modifiedTime], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tags
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
              modifiedTime(formatString: "MMMM Do, YYYY")
              birthTime(formatString: "MMMM Do, YYYY")
            }
          }
          timeToRead
        }
      }
    }
  }
`
