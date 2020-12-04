import React, { useState } from "react"
import PostList from "../postList"
import FilterPosts from "./filterPosts"
import styles from "./SeriesItems.module.scss"

const getCategories = items => {
  let tempItems = items.map(item => {
    return item.node.frontmatter.category
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["all series", ...categories]
  return categories
}

const SeriesItems = ({ items }) => {

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
    if (category === "all series") {
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
      <main className={styles.main} role="main">
        <section className={styles.filterSection}>
          <div className={styles.align}>
            <div className={styles.heading}>
              <h1>Up-to-date Guides</h1>
              <p>Go ahead and explore by category</p>
            </div>
            <FilterPosts
              categories={categories}
              handleItems={handleItems}
              selectedItem={selectedItem}
            />
          </div>
        </section>

        <div className={styles.inner}>
          <ul className={styles.list}>
            {blogPostItems.map(({ node }) => {
              const { frontmatter, id, timeToRead, fields } = node
              const { title } = frontmatter
              return (
                <PostList
                  key={id}
                  title={title}
                  time={timeToRead}
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
      <main className={styles.main} role="main">
        <div className={styles.container}>
          <p>There are no posts to display...please add items</p>
        </div>
      </main>
    )
  }
}

export default SeriesItems
