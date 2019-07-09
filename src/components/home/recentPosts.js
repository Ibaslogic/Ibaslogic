import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import SubHeading from "./subHeading"
import { slugify } from "../../util/utilityFunction"
import recentStyles from "./recentPosts.module.scss"

const RecentPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPostContent(
        sort: { fields: publishedDate, order: DESC }
        limit: 3
      ) {
        edges {
          node {
            id
            slug
            title
            description {
              description
            }
            image {
              fluid(maxWidth: 460) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)
  const edges = data.allContentfulBlogPostContent.edges

  return (
    <section id="blog" className={recentStyles.recentPosts}>
      <SubHeading title="from the blog" />
      <div className={recentStyles.viewAll}>
        <Link to="/blog">view all posts</Link>
      </div>
      <div className={recentStyles.container}>
        {edges.map(({ node }) => {
          const { slug, id, title, image } = node
          return (
            <article className={recentStyles.article} key={id}>
              <header>
                <Link to={`/blog/${slugify(slug)}/`}>
                  <Img fluid={image.fluid} alt={slug} />
                </Link>
              </header>
              <div className={recentStyles.content}>
                <h2>
                  <Link to={`/blog/${slugify(slug)}/`}> {title}</Link>
                </h2>
                <p>{node.description.description}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default RecentPosts
