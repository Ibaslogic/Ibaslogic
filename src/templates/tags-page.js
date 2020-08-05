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
            <h3 className={blogStyles.description}>{tagHeader}</h3>
          </div>
          <ul className={blogStyles.list}>
            {edges.map(({ node }) => {
              const { id, timeToRead } = node
              return (
                <Post
                  key={id}
                  title={node.frontmatter.title}
                  posted={node.frontmatter.datePublished}
                  updated={node.frontmatter.dateUpdated}
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
      sort: { fields: [frontmatter___dateUpdated], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title 
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
