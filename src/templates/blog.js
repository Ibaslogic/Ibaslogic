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

import PostSeriesLink from "../components/globals/custom_components/PostSeriesLink"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { name: { eq: $slug } } }) {
      id
      timeToRead
      excerpt
      fields {
        slug {
          modifiedTime(formatString: "MMMM Do, YYYY")
          birthTime(formatString: "MMMM Do, YYYY")
        }
      }
      frontmatter {
        title
        description
        tags
        featured {
          childImageSharp {
            fluid(maxWidth: 690) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`

const shortcodes = {
  PostSeriesLink,
}

const Blog = ({ data, pageContext }) => {
  const { modifiedTime, birthTime } = data.mdx.fields.slug

  return (
    <Layout>
      <SEO
        title={data.mdx.frontmatter.title}
        excerpt={data.mdx.excerpt}
        description={data.mdx.frontmatter.description}
      />
      <div
        id="primary"
        className={`${blogPageStyles.container} ${blogPageStyles.wrap}`}
      >
        <main className={blogPageStyles.siteMain} role="main">
          <article className={blogPageStyles.singlePost}>
            <header className={blogPageStyles.entryHeader}>
              <h1 className={blogPageStyles.title}>
                {data.mdx.frontmatter.title}
              </h1>
              <div className={blogPageStyles.datePublished}>
                {" "}
                {modifiedTime === birthTime ? " Posted " : "Updated"} on{" "}
                <span>{data.mdx.fields.slug.modifiedTime}</span>
                <span className={blogPageStyles.divider}></span>
                <span>{data.mdx.timeToRead} min read</span>
                <span className={blogPageStyles.divider}></span>
                <a
                  className={blogPageStyles.editPost}
                  href={
                    "https://github.com/Ibaslogic/Ibaslogic/blob/master/src/" +
                    pageContext.postPath
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
                fluid={data.mdx.frontmatter.featured.childImageSharp.fluid}
                alt={data.mdx.frontmatter.title}
              />
              {/* {renderAst(data.mdx.htmlAst)} */}

              {/* {documentToReactComponents(
                data.contentfulBlogPostContent.body.json,
                options
              )} */}
              <MDXProvider components={shortcodes}>
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
              </MDXProvider>
            </div>
          </article>

          <div className={blogPageStyles.bottomSocialShare}>
            <SocialShare
              slug={pageContext.slug}
              title={data.mdx.frontmatter.title}
              heading="Share this"
            />
          </div>

          <div className={blogPageStyles.tagLinks}>
            <ul className={blogPageStyles.postTags}>
              {data.mdx.frontmatter.tags.map((tag, index) => (
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
          title={data.mdx.frontmatter.title}
          heading="share"
        />
      </div>
    </Layout>
  )
}

export default Blog
