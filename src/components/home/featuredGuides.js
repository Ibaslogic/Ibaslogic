import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import SubHeading from "./subHeading"
import featuredStyles from "./featuredPosts.module.scss"

const FeaturedGuides = () => {
  const data = useStaticQuery(graphql`
  query {
    reactSeriesPosts: allMdx(filter: {frontmatter: {series: {eq: "react_tutorial"}}}, sort: {fields: frontmatter___dateUpdated, order: DESC}) {
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
    gatsbySeriesPosts: allMdx(filter: {frontmatter: {series: {eq: "gatsby_tutorial"}}}, sort: {fields: frontmatter___dateUpdated, order: DESC}) {
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
  `)
  const reactSeriesPosts = data.reactSeriesPosts.edges
  const gatsbySeriesPosts = data.gatsbySeriesPosts.edges

  return (
    <section id="featured" className={`bg_dtl ${featuredStyles.featuredGuides}`}>
      <div className={featuredStyles.inner}>
        <p>Level up your Dev knowledge with our series of in-depth and easy to follow guides.</p>
        <div className={`dm_brder ${featuredStyles.subHeading}`}>
          <SubHeading title="React tutorial series" />
        </div>

        <ol className={featuredStyles.list}>
          {reactSeriesPosts.map(({ node }) => {
            const { id, frontmatter, fields } = node
            const { title } = frontmatter
            return (
              <li className={featuredStyles.listItem} key={id}>
                <Link className={featuredStyles.subTitle} to={`/${fields.slug.name}/`}>
                  {title}
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
      <div className={featuredStyles.inner}>
        <div className={`dm_brder ${featuredStyles.subHeading}`}>
          <SubHeading title="Gatsby tutorial" />
        </div>

        <ol className={featuredStyles.list}>
          {gatsbySeriesPosts.map(({ node }) => {
            const { id, frontmatter, fields } = node
            const { title } = frontmatter
            return (
              <li className={featuredStyles.listItem} key={id}>
                <Link className={featuredStyles.subTitle} to={`/${fields.slug.name}/`}>
                  {title}
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default FeaturedGuides
