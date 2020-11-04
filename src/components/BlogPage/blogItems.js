import React, { useState } from "react"
import Post from "../post"
import FilterPosts from "./filterPosts"
import blogStyles from "./blogItems.module.scss"

const getCategories = items => {
  let tempItems = items.map(item => {
    return item.node.frontmatter.category
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["all posts", ...categories]
  return categories
}

const BlogItems = ({ items }) => {

  // filter posts
  const [postItems] = useState(items.allMdx.edges)
  const [blogPostItems, setBlogPostItems] = useState(items.allMdx.edges)
  const [categories] = useState(getCategories(items.allMdx.edges))
  const [selectedItem, setSelectedItem] = useState(
    getCategories(items.allMdx.edges) &&
    getCategories(items.allMdx.edges)[0]
  )

  const itemsNum = items.allMdx.edges.length

  // handle filter posts
  const handleItems = category => {
    let tempItems = [...postItems]
    if (category === "all posts") {
      setBlogPostItems(tempItems)
      setSelectedItem(category)
    } else {
      let items = tempItems.filter(
        ({ node }) => node.frontmatter.category === category
      )
      setBlogPostItems(items)
      setSelectedItem(category)
    }
  }

  if (itemsNum > 0) {
    return (
      <main className={blogStyles.main} role="main">
        <div className={blogStyles.container}>
          <FilterPosts
            categories={categories}
            handleItems={handleItems}
            selectedItem={selectedItem}
          />
          <ul className={blogStyles.list}>
            {blogPostItems.map(({ node }) => {
              const { frontmatter, id, timeToRead, fields } = node
              const { title, dateUpdated, datePublished, featured } = frontmatter
              return (
                <Post
                  key={id}
                  title={title}
                  updated={dateUpdated}
                  posted={datePublished}
                  time={timeToRead}
                  fluid={featured && featured.childImageSharp.fluid}
                  slug={fields.slug.name}
                />
              )
            })}
          </ul>
        </div>
      </main>
    )
  } else {
    return (
      <main className={blogStyles.main} role="main">
        <div className={blogStyles.container}>
          <p>There are no posts to display...please add items</p>
        </div>
      </main>
    )
  }
}

export default BlogItems
