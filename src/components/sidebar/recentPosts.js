import React from "react"
import { graphql, StaticQuery } from "gatsby"
//import Img from "gatsby-image"
import SidebarTitle from "./sidebarTitle"
import recentPostStyles from "./sidebar.module.scss"
import SidebarPostsMarkup from "./SidebarPostMarkup"

const RecentPosts = () => {
  return (
    <div
      className={`recent__post ${recentPostStyles.recentPosts} ${recentPostStyles.widget}`}
    >
      <SidebarTitle title="recent posts" />
      <StaticQuery
        query={recentPostQuery}
        render={data => (
          <ul className={recentPostStyles.listContainer}>
            {data.allMdx.edges.map(({ node }) => (
              <SidebarPostsMarkup
                key={node.id}
                fixed={node.frontmatter.featured.childImageSharp.fixed}
                title={node.frontmatter.title}
                slug={node.fields.slug.name}
              />
              // <li key={node.id}>
              //   <Img
              //     className={recentPostStyles.imgTumbnail}
              //     fluid={node.frontmatter.image.childImageSharp.fluid}
              //   />
              //   <Link to={`/blog/${node.fields.slug}`}>
              //     {node.frontmatter.title}
              //   </Link>
              // </li>
            ))}
          </ul>
        )}
      />
    </div>
  )
}

const recentPostQuery = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___dateUpdated], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            featured {
              childImageSharp {
                fixed(width: 80, height: 46) {
                  ...GatsbyImageSharpFixed
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

export default RecentPosts
