import React from "react"
import { graphql, StaticQuery } from "gatsby"
//import Img from "gatsby-image"
import SidebarTitle from "./sidebarTitle"
import recentPostStyles from "./sidebar.module.scss"
import SidebarPostsMarkup from "./SidebarPostMarkup"

const RecentPosts = () => {
  return (
    <div
      className={`${recentPostStyles.recentPosts} ${recentPostStyles.widget}`}
    >
      <SidebarTitle title="recent posts" />
      <StaticQuery
        query={recentPostQuery}
        render={data => (
          <ul className={recentPostStyles.listContainer}>
            {data.allContentfulBlogPostContent.edges.map(({ node }) => (
              <SidebarPostsMarkup
                key={node.id}
                fluid={node.image.fluid}
                title={node.title}
                slug={node.slug}
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
    allContentfulBlogPostContent(
      sort: { fields: publishedDate, order: DESC }
      limit: 5
    ) {
      edges {
        node {
          id
          slug
          timeToRead
          title
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

export default RecentPosts
