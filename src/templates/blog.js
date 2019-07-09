import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import { slugify } from "../util/utilityFunction"
import Img from "gatsby-image"
import Sidebar from "../components/sidebar/sidebar"
import Share from "../components/Blogpage/share"
import blogPageStyles from "./blogpage.module.scss"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPostContent(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      timeToRead
      tags
      image {
        fluid(maxWidth: 680) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`

const Blog = ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO title={data.contentfulBlogPostContent.title} />
      <div
        id="primary"
        className={`${blogPageStyles.container} ${blogPageStyles.wrap}`}
      >
        <main className={blogPageStyles.siteMain} role="main">
          <article className={blogPageStyles.singlePost}>
            <header className="entryHeader">
              <h1 className={blogPageStyles.title}>
                {data.contentfulBlogPostContent.title}
              </h1>
              <div className={blogPageStyles.datePublished}>
                {" "}
                Updated on{" "}
                <span>{data.contentfulBlogPostContent.publishedDate}</span>
                <span className={blogPageStyles.divider}></span>
                <span>
                  {data.contentfulBlogPostContent.timeToRead} min read
                </span>
              </div>
            </header>

            <div className={blogPageStyles.entryContent}>
              <Img
                className={blogPageStyles.featuredImage}
                fluid={data.contentfulBlogPostContent.image.fluid}
                alt={data.contentfulBlogPostContent.title}
              />
              <div
              // dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
              ></div>
            </div>
          </article>

          <Share
            slug={pageContext.slug}
            title={data.contentfulBlogPostContent.title}
          />

          <div className={blogPageStyles.tagLinks}>
            <ul className={blogPageStyles.postTags}>
              {data.contentfulBlogPostContent.tags.map((tag, index) => (
                <li key={index}>
                  <Link to={`/tags/${slugify(tag)}/`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        </main>
        <aside className={blogPageStyles.secondaryArea} role="complementary">
          <Sidebar />
        </aside>
      </div>
    </Layout>
  )
}

export default Blog
