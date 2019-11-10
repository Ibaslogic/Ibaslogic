import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import { slugify } from "../util/utilityFunction"
import Img from "gatsby-image"
import Sidebar from "../components/sidebar/sidebar"
import SocialShare from "../components/BlogPage/socialShare"
//import { BLOCKS } from "@contentful/rich-text-types"
//import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import blogPageStyles from "./blogpage.module.scss"
import SEO from "../components/seo"
import { FaPencilAlt } from "react-icons/fa"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      timeToRead
      excerpt
      frontmatter {
        title
        description
        date(formatString: "MMMM Do, YYYY")
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 690) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`

const Blog = ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO
        title={data.markdownRemark.frontmatter.title}
        excerpt={data.markdownRemark.excerpt}
        description={data.markdownRemark.frontmatter.description}
      />
      <div
        id="primary"
        className={`${blogPageStyles.container} ${blogPageStyles.wrap}`}
      >
        <main className={blogPageStyles.siteMain} role="main">
          <article className={blogPageStyles.singlePost}>
            <header className={blogPageStyles.entryHeader}>
              <h1 className={blogPageStyles.title}>
                {data.markdownRemark.frontmatter.title}
              </h1>
              <div className={blogPageStyles.datePublished}>
                {" "}
                Updated on <span>{data.markdownRemark.frontmatter.date}</span>
                <span className={blogPageStyles.divider}></span>
                <span>{data.markdownRemark.timeToRead} min read</span>
                <span className={blogPageStyles.divider}></span>
                <a
                  className={blogPageStyles.editPost}
                  href={
                    "https://github.com/Ibaslogic/Ibaslogic/blob/master/src/posts/" +
                    pageContext.slug
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Edit this post <FaPencilAlt />
                </a>
              </div>
            </header>

            <div className={blogPageStyles.entryContent}>
              <Img
                className={blogPageStyles.featuredImage}
                fluid={
                  data.markdownRemark.frontmatter.image.childImageSharp.fluid
                }
                alt={data.markdownRemark.frontmatter.title}
              />

              {/* {documentToReactComponents(
                data.contentfulBlogPostContent.body.json,
                options
              )} */}
              <div
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
              ></div>
            </div>
          </article>

          <div className={blogPageStyles.bottomSocialShare}>
            <SocialShare
              slug={pageContext.slug}
              title={data.markdownRemark.frontmatter.title}
              heading="Share this"
            />
          </div>

          <div className={blogPageStyles.tagLinks}>
            <ul className={blogPageStyles.postTags}>
              {data.markdownRemark.frontmatter.tags.map((tag, index) => (
                <li key={index}>
                  <Link to={`/tags/${slugify(tag)}/`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        </main>
        <aside className={blogPageStyles.secondaryArea}>
          <Sidebar />
        </aside>
      </div>

      <div className={blogPageStyles.sideSocialShare}>
        <SocialShare
          slug={pageContext.slug}
          title={data.markdownRemark.frontmatter.title}
          heading="share"
        />
      </div>
    </Layout>
  )
}

export default Blog
