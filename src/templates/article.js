import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ShareItems from "../components/socialShare/shareItems"
import TagLinks from "../components/tagLinks/tagLinks"
import articleStyle from "./article.module.scss"
import SEO from "../components/seo"
import NavigatePosts from "../components/navigatePost/navigate"
import TableOfContents from "../components/globals/custom_components/TableOfContents"
import PostMeta from "../components/postMeta"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
// import Comment from "../components/comment"

export const query = graphql`
  query($slug: String!) {
    siteData: site {
      siteMetadata {
        siteUrl
        twitterHandle
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

const Article = ({ data, pageContext }) => {
  const {
    datePublished,
    dateUpdated,
    title,
    description,
    tags
  } = data.postsData.frontmatter
  const { excerpt, timeToRead, tableOfContents, body } = data.postsData
  const { siteUrl, twitterHandle } = data.siteData.siteMetadata

  // Get previous and next link
  const prev = pageContext.prev
    ? {
      url: pageContext.prev.fields.slug.name,
    }
    : null
  const next = pageContext.next
    ? {
      url: pageContext.next.fields.slug.name,
    }
    : null


  return (
    <Layout>
      <SEO
        title={title}
        excerpt={excerpt}
        description={description}
        isBlogPost
      />
      <main
        id="primary"
        className={`bg_dtl_pp ${articleStyle.siteMain}`}
        role="main"
      >
        <article className={articleStyle.singlePost}>
          <header className={articleStyle.entryHeader}>
            <h1 className={articleStyle.title}>{title}</h1>
            <PostMeta datePublished={datePublished} dateUpdated={dateUpdated} timeToRead={timeToRead} pageContext={pageContext} />
          </header>

          <div className={articleStyle.content}>
            <MDXProvider
              components={{
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
        <aside className={articleStyle.secondary}>
          <div className={articleStyle.secondaryContent}>
            <div className={articleStyle.tags}>{tags && <TagLinks tags={tags} />}</div>
            <div className={articleStyle.navigateContainer}>
              <NavigatePosts
                prev={prev}
                next={next}
              />
            </div>
            <div className={articleStyle.share}>
              <ShareItems
                slug={pageContext.slug}
                title={title}
                twitterHandle={twitterHandle}
                siteUrl={siteUrl}
                heading="Share"
              />
            </div>
          </div>
        </aside>
      </main>
    </Layout>
  )
}

export default Article
