import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import SubHeading from "./subHeading"
import recentStyles from "./recentPosts.module.scss"
import ReadMore from "./readMore"
import { FaArrowRight } from "react-icons/fa"

const RecentPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: [frontmatter___dateUpdated], order: DESC }
        limit: 3
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              description
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
            excerpt
          }
        }
      }
    }
  `)
  const edges = data.allMdx.edges

  return (
    <section id="blog" className={recentStyles.secContainer}>
      <div className={recentStyles.recentPosts}>
        <div className={recentStyles.subHeading}>
          <SubHeading title="Latest Articles" />
          <div className={recentStyles.viewAll}>
            <ReadMore
              btnPry={`btn-primary readMore ${recentStyles.link}`}
              text="all posts"
              linkTo="/blog/"
            />
          </div>
        </div>

        <div className={recentStyles.container}>
          {edges.map(({ node }) => {
            const { id, frontmatter, fields, excerpt } = node
            const { featured } = frontmatter
            return (
              <article className={recentStyles.article} key={id}>
                <div className={recentStyles.mainContent}>
                  <Link to={`/${fields.slug.name}/`}>
                    {featured && <Img
                      fluid={featured.childImageSharp.fluid}
                      alt={fields.slug.name}
                      fadeIn={false}
                      loading="eager"
                      className={recentStyles.imgWrapper}
                      backgroundColor="#eaeaea"
                    />}                 
                    <div className={recentStyles.content}>
                      <h2>{frontmatter.title}</h2>
                      <p className={recentStyles.excerpt}>
                        {frontmatter.description || excerpt}
                      </p>
                      <div className={recentStyles.learnMore}>
                        explore <FaArrowRight />
                      </div>
                    </div>
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default RecentPosts
