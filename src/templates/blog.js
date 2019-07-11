import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import { slugify } from "../util/utilityFunction"
import Img from "gatsby-image"
import Sidebar from "../components/sidebar/sidebar"
import SocialShare from "../components/BlogPage/socialShare"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
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
          ...GatsbyContentfulFluid
        }
      }
      body {
        json
      }
    }
  }
`

const Blog = ({ data, pageContext }) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { title, description, file } = node.data.target.fields
        const mineType = file["en-US"].contentType
        const mineGroup = mineType.split("/")[0]

        switch (mineGroup) {
          case "image":
            return (
              <img
                title={title ? title["en-US"] : null}
                alt={description ? description["en-US"] : null}
                src={file["en-US"].url}
              />
            )
          case "application":
            return (
              <a
                href={file["en-US"].url}
                alt={description ? description["en-US"] : null}
              >
                {title ? title["en-US"] : file["en-US"].details.fileName}
              </a>
            )
          default:
            return (
              <span style={{ backgroundColor: "#333", color: "white" }}>
                {mineType} embedded asset
              </span>
            )
        }
      },
    },
  }

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

              {documentToReactComponents(
                data.contentfulBlogPostContent.body.json,
                options
              )}
            </div>
          </article>

          <SocialShare
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
        <aside className={blogPageStyles.secondaryArea}>
          <Sidebar />
        </aside>
      </div>
    </Layout>
  )
}

export default Blog
