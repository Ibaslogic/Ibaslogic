import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import { slugify } from "../util/utilityFunction"
import Img from "gatsby-image"
import Sidebar from "../components/sidebar/sidebar"
import SocialShare from "../components/BlogPage/socialShare"
import avatar from "../images/ibas_avartar.png"
//import { BLOCKS } from "@contentful/rich-text-types"
//import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import blogPageStyles from "./blogpage.module.scss"
import SEO from "../components/seo"
import { FaPencilAlt } from "react-icons/fa"

import PostSeriesLink from "../components/globals/custom_components/PostSeriesLink"
import TableOfContents from "../components/globals/custom_components/TableOfContents"
import ScrollTop from "../components/BlogPage/scrollTop"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Comment from "../components/comment"

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        siteUrl
        twitterHandle
      }
    }
    mdx(fields: { slug: { name: { eq: $slug } } }) {
      id
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
  }
`

const Blog = ({ data, pageContext }) => {
  const { datePublished, dateUpdated } = data.mdx.frontmatter
  const image = data.mdx.frontmatter.featured
    ? data.mdx.frontmatter.featured.childImageSharp.fluid
    : null

  const commentBoxRef = React.createRef();

  useEffect(() => {
    const scriptEle = document.createElement('script')
    scriptEle.async = true
    scriptEle.src = 'https://utteranc.es/client.js'
    scriptEle.setAttribute('repo', 'ibaslogic/comments')
    scriptEle.setAttribute('issue-term', 'pathname')
    scriptEle.setAttribute('id', 'utterances')
    scriptEle.setAttribute('theme', 'github-light')
    scriptEle.setAttribute('crossorigin', 'anonymous')
    if (commentBoxRef && commentBoxRef.current) {
      commentBoxRef.current.appendChild(scriptEle)
    } else {
      console.log(`Error with utterances comments on: ${commentBoxRef}`);
    }
  }, [])

  return (
    <Layout>
      <SEO
        title={data.mdx.frontmatter.title}
        excerpt={data.mdx.excerpt}
        description={data.mdx.frontmatter.description}
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
            <header className={blogPageStyles.entryHeader}>
              <h1 className={blogPageStyles.title}>
                {data.mdx.frontmatter.title}
              </h1>
              <div className={blogPageStyles.tagLinks}>
                <ul className={blogPageStyles.postTags}>
                  {data.mdx.frontmatter.tags.map((tag, index) => (
                    <li key={index}>
                      {(tag === "javascript") ? <Link style={{ backgroundColor: "#f4d001", color: "#000" }} to={`/tags/${slugify(tag)}/`}><span>#</span>{tag}</Link> : (tag === "gatsby") ? <Link style={{ backgroundColor: "#653297", color: "#fff" }} to={`/tags/${slugify(tag)}/`}><span>#</span>{tag}</Link> : (tag === "basic") ? <Link style={{ backgroundColor: "#035b21", color: "#fff" }} to={`/tags/${slugify(tag)}/`}><span>#</span>{tag}</Link> : (tag === "react" || tag === "reactjs" || tag === "jsx") ? <Link style={{ backgroundColor: "#222222", color: "#61DAF6" }} to={`/tags/${slugify(tag)}/`}><span>#</span>{tag}</Link> : <Link style={{ backgroundColor: "#bfbfbf", color: "#000" }} to={`/tags/${slugify(tag)}/`}><span>#</span>{tag}</Link>}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`post__meta ${blogPageStyles.postMeta}`}>
                <Link to="/about/" className={`author__avatar ${blogPageStyles.authorAvatar}`}>
                  <span className={blogPageStyles.avatarContainer}>
                    <img src={avatar} alt="author avatar" />
                  </span>
                  Ibas<span className={blogPageStyles.divider}></span>
                </Link>
                <span className={blogPageStyles.inlineBlockStyle}>{datePublished === dateUpdated ? " Published " : "Updated"} on {dateUpdated}</span>
                <span className={blogPageStyles.divider}></span>
                <span className={blogPageStyles.inlineBlockStyle}>{data.mdx.timeToRead} min read</span>
                <span className={blogPageStyles.divider}></span>
                <span className={blogPageStyles.inlineBlockStyle}><a
                  className={`edit__post ${blogPageStyles.editPost}`}
                  href={
                    "https://github.com/Ibaslogic/Ibaslogic/blob/master/src/" +
                    pageContext.postPath
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Edit <FaPencilAlt />
                </a></span>

              </div>
            </header>

            <div className={blogPageStyles.entryContent}>
              <Img
                className={blogPageStyles.featuredImage}
                fluid={data.mdx.frontmatter.featured.childImageSharp.fluid}
                alt={data.mdx.frontmatter.title}
              />
              <MDXProvider
                components={{
                  PostSeriesLink,
                  TableOfContents: () => (
                    <TableOfContents
                      items={data.mdx.tableOfContents.items}
                      slug={pageContext.slug}
                    ></TableOfContents>
                  ),
                }}
              >
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
              </MDXProvider>
            </div>
          </article>

          <div className={blogPageStyles.bottomSocialShare}>
            <SocialShare
              slug={pageContext.slug}
              title={data.mdx.frontmatter.title}
              twitterHandle={data.site.siteMetadata.twitterHandle}
              siteUrl={data.site.siteMetadata.siteUrl}
              heading="Share"
            />
          </div>

          <div className={blogPageStyles.commentSection}>
            <h2 className={blogPageStyles.title}>Comments</h2>
            <Comment commentBoxRef={commentBoxRef} />
          </div>
        </main>
        <aside className={`secondary__area ${blogPageStyles.secondaryArea}`}>
          <Sidebar
            relatedArticles={pageContext.relatedArticles}
            twitterHandle={data.site.siteMetadata.twitterHandle}
            slug={pageContext.slug}
          />
        </aside>
      </div>

      <div className={blogPageStyles.sideSocialShare}>
        <SocialShare
          slug={pageContext.slug}
          title={data.mdx.frontmatter.title}
          twitterHandle={data.site.siteMetadata.twitterHandle}
          siteUrl={data.site.siteMetadata.siteUrl}
          heading="share"
        />
      </div>

      <ScrollTop />
    </Layout>
  )
}

export default Blog
