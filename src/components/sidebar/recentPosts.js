import React from "react"
import { graphql, StaticQuery } from "gatsby"
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
                title={node.frontmatter.title}
                slug={node.fields.slug.name}
              />
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
      filter: { fields: { collection: { eq: "series" } } }
      limit: 4
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug {
              name
            }
          }
        }
      }
    }
  }
`

export default RecentPosts
