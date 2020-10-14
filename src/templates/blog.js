import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { slugify } from "../util/utilityFunction"
import Img from "gatsby-image"
import Sidebar from "../components/sidebar/sidebar"
import SocialShare from "../components/BlogPage/socialShare"
import blogPageStyles from "./blogpage.module.scss"
import SEO from "../components/seo"
import { FaPencilAlt } from "react-icons/fa"
import PostSeriesLink from "../components/globals/custom_components/PostSeriesLink"
import PostNextUnit from "../components/globals/custom_components/PostNextUnit"
import TableOfContents from "../components/globals/custom_components/TableOfContents"
import ScrollTop from "../components/BlogPage/scrollTop"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Comment from "../components/comment"

export const query = graphql`
  query($slug: String!) {
    siteData: site {
      siteMetadata {
        siteUrl
        twitterHandle
        author_avatar
      }
    }
    postsData: mdx(fields: { slug: { name: { eq: $slug } } }) {
      timeToRead
      excerpt(pruneLength: 300)
      tableOfContents
      frontmatter {
        title
        description
        datePublished(formatString: "Do MMM, YY")
        dateUpdated(formatString: "Do MMM, YY")
        tags
        featured {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
    getAuthorAvatar: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            fixed(height: 32) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
  }
`

const Blog = ({ data, pageContext }) => {
  const {
    datePublished,
    dateUpdated,
    title,
    description,
    tags,
    featured,
  } = data.postsData.frontmatter
  const { excerpt, timeToRead, tableOfContents, body } = data.postsData
  const { siteUrl, twitterHandle, author_avatar } = data.siteData.siteMetadata
  const image = featured ? featured.childImageSharp.fluid : null

  const authorAvatar = data.getAuthorAvatar.edges.find(
    ({ node }) => node.relativePath === author_avatar
  ).node

  if (!authorAvatar) {
    return null
  }

  const commentBoxRef = React.createRef()

  useEffect(() => {
    const scriptEle = document.createElement("script")
    scriptEle.async = true
    scriptEle.src = "https://utteranc.es/client.js"
    scriptEle.setAttribute("repo", "ibaslogic/comments")
    scriptEle.setAttribute("issue-term", "pathname")
    scriptEle.setAttribute("id", "utterances")
    scriptEle.setAttribute("theme", "github-light")
    scriptEle.setAttribute("crossorigin", "anonymous")
    if (commentBoxRef && commentBoxRef.current) {
      commentBoxRef.current.appendChild(scriptEle)
    } else {
      console.log(`Error with utterances comments on: ${commentBoxRef}`)
    }
  }, [])

  return (
    <Layout>
      <SEO
        title={title}
        excerpt={excerpt}
        description={description}
        image={image}
        isBlogPost
      />
      <div
        id="primary"
        className={`${blogPageStyles.container} ${blogPageStyles.wrap}`}
      >
        <main
          className={`blogpage__main ${blogPageStyles.siteMain}`}
          role="main"
        >
          <article className={blogPageStyles.singlePost}>
            {featured &&  <Img
              className={blogPageStyles.featuredImage}
              fluid={featured.childImageSharp.fluid}
              alt={title}
              backgroundColor="#eaeaea"
            />}        
            <header className={blogPageStyles.entryHeader}>
              <h1 className={blogPageStyles.title}>{title}</h1>
              <div className={blogPageStyles.tagLinks}>
                <ul className={blogPageStyles.postTags}>
                  {tags.map((tag, index) => (
                    <li key={index}>
                      {tag === "javascript" ? (
                        <Link
                          style={{ backgroundColor: "#f4d001", color: "#000" }}
                          to={`/tags/${slugify(tag)}/`}
                        >
                          <span>#</span>
                          {tag}
                        </Link>
                      ) : tag === "gatsby" ? (
                        <Link
                          style={{ backgroundColor: "#653297", color: "#fff" }}
                          to={`/tags/${slugify(tag)}/`}
                        >
                          <span>#</span>
                          {tag}
                        </Link>
                      ) : tag === "basic" ? (
                        <Link
                          style={{ backgroundColor: "#035b21", color: "#fff" }}
                          to={`/tags/${slugify(tag)}/`}
                        >
                          <span>#</span>
                          {tag}
                        </Link>
                      ) : tag === "graphql" ? (
                        <Link
                          style={{ backgroundColor: "#ae0878", color: "#fff" }}
                          to={`/tags/${slugify(tag)}/`}
                        >
                          <span>#</span>
                          {tag}
                        </Link>
                      ) : tag === "react" ||
                        tag === "reactjs" ||
                        tag === "jsx" ? (
                        <Link
                          style={{
                            backgroundColor: "#222222",
                            color: "#61DAF6",
                          }}
                          to={`/tags/${slugify(tag)}/`}
                        >
                          <span>#</span>
                          {tag}
                        </Link>
                      ) : (
                        <Link
                          style={{ backgroundColor: "#bfbfbf", color: "#000" }}
                          to={`/tags/${slugify(tag)}/`}
                        >
                          <span>#</span>
                          {tag}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`post__meta ${blogPageStyles.postMeta}`}>
                <Link
                  to="/about/"
                  className={`author__avatar ${blogPageStyles.authorAvatar}`}
                >
                  <span className={blogPageStyles.avatarContainer}>
                    <Img
                      fixed={authorAvatar.childImageSharp.fixed}
                      alt={authorAvatar.relativePath}
                      backgroundColor="#eaeaea"
                      className={blogPageStyles.avatar}
                    />
                  </span>
                  Ibas<span className={blogPageStyles.divider}></span>
                </Link>
                <span className={blogPageStyles.inlineBlockStyle}>
                  {datePublished === dateUpdated ? " Published " : "Updated"} on{" "}
                  {dateUpdated}
                </span>
                <span className={blogPageStyles.divider}></span>
                <span className={blogPageStyles.inlineBlockStyle}>
                  {timeToRead} min read
                </span>
                <span className={blogPageStyles.divider}></span>
                <span className={blogPageStyles.inlineBlockStyle}>
                  <a
                    className={`edit__post ${blogPageStyles.editPost}`}
                    href={
                      "https://github.com/Ibaslogic/Ibaslogic/blob/master/src/" +
                      pageContext.postPath
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Edit <FaPencilAlt />
                  </a>
                </span>
              </div>
            </header>

            <div className={blogPageStyles.entryContent}>
              <MDXProvider
                components={{
                  PostSeriesLink,
                  PostNextUnit,
                  TableOfContents: () => (
                    <TableOfContents
                      items={tableOfContents.items}
                      slug={pageContext.slug}
                    ></TableOfContents>
                  ),
                }}
              >
                <MDXRenderer>{body}</MDXRenderer>
              </MDXProvider>
            </div>
          </article>

          <div className={blogPageStyles.bottomSocialShare}>
            <SocialShare
              slug={pageContext.slug}
              title={title}
              twitterHandle={twitterHandle}
              siteUrl={siteUrl}
              heading="Share"
            />
          </div>

          <div className={blogPageStyles.commentSection}>
            <h2 className={`discusion__title ${blogPageStyles.title}`}>
              Discussion
            </h2>
            <Comment commentBoxRef={commentBoxRef} />
          </div>
        </main>
        <aside className={`secondary__area ${blogPageStyles.secondaryArea}`}>
          <Sidebar
            relatedArticles={pageContext.relatedArticles}
            twitterHandle={twitterHandle}
            slug={pageContext.slug}
          />
        </aside>
      </div>

      <div className={blogPageStyles.sideSocialShare}>
        <SocialShare
          slug={pageContext.slug}
          title={title}
          twitterHandle={twitterHandle}
          siteUrl={siteUrl}
          heading="share"
        />
      </div>

      <ScrollTop />
    </Layout>
  )
}

export default Blog
