import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import SubHeading from "./subHeading"
//import { slugify } from "../../util/utilityFunction"
import recentStyles from "./recentPosts.module.scss"

const RecentPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 3
      ) {
        edges {
          node {
            id
            frontmatter {
              title
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
            excerpt
          }
        }
      }
    }
  `)
  const edges = data.allMarkdownRemark.edges

  return (
    <section id="blog" className={recentStyles.recentPosts}>
      <SubHeading title="from the blog" />
      <div className={recentStyles.viewAll}>
        <Link to="/blog">view all posts</Link>
      </div>
      <div className={recentStyles.container}>
        {edges.map(({ node }) => {
          const { id, frontmatter, fields, excerpt } = node
          return (
            <article className={recentStyles.article} key={id}>
              <header>
                <Link to={`/blog/${fields.slug}/`}>
                  <Img
                    fluid={frontmatter.image.childImageSharp.fluid}
                    alt={fields.slug}
                  />
                </Link>
              </header>
              <div className={recentStyles.content}>
                <h2>
                  <Link to={`/blog/${fields.slug}/`}> {frontmatter.title}</Link>
                </h2>
                <p>{excerpt}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default RecentPosts
