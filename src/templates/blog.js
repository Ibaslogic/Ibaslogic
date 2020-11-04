import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import Sidebar from "../components/sidebar/sidebar"
import ShareItems from "../components/socialShare/shareItems"
import blogPageStyles from "./blogpage.module.scss"
import SEO from "../components/seo"
import PostSeriesLink from "../components/globals/custom_components/PostSeriesLink"
import PostNextUnit from "../components/globals/custom_components/PostNextUnit"
import TableOfContents from "../components/globals/custom_components/TableOfContents"
import ScrollTop from "../components/BlogPage/scrollTop"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Comment from "../components/comment"
import PostMeta from "../components/postMeta"
import SeriesTagLinks from "../components/tagLinks/series"

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
          className={blogPageStyles.siteMain} //bg_dtl_pp
          role="main"
        >
          <article className={blogPageStyles.singlePost}>
                    
            <header className={blogPageStyles.entryHeader}>
              <h1>{title}</h1>
              
              <PostMeta authorAvatar={authorAvatar} datePublished={datePublished} dateUpdated={dateUpdated} timeToRead={timeToRead} pageContext={pageContext} isSeries/>

              {featured &&  <Img
              className={blogPageStyles.featuredImage}
              fluid={featured.childImageSharp.fluid}
              alt={title}
              backgroundColor="#eaeaea"
            />}
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
            <SeriesTagLinks tags={tags}/>
          </article>
          <div className={blogPageStyles.discus}>
            <div className={blogPageStyles.socialShare_tablet}>
              <ShareItems
                slug={pageContext.slug}
                title={title}
                twitterHandle={twitterHandle}
                siteUrl={siteUrl}
                heading="share"
              />
            </div>
            <div className={blogPageStyles.commentSection}>
              <h2 className={`discusion__title ${blogPageStyles.title}`}>
                Discussion
              </h2>
              <Comment commentBoxRef={commentBoxRef} />
            </div>
          </div>
        </main>
        <div className={blogPageStyles.socialShare_largeScreen}>
          <ShareItems
            slug={pageContext.slug}
            title={title}
            twitterHandle={twitterHandle}
            siteUrl={siteUrl}
            heading="share"
          />
        </div>
        <aside className={`secondary__area ${blogPageStyles.secondaryArea}`}>
          <Sidebar
            relatedArticles={pageContext.relatedArticles}
            twitterHandle={twitterHandle}
            slug={pageContext.slug}
          />
        </aside>   
      </div>
     
      <ScrollTop />
    </Layout>
  )
}

export default Blog
