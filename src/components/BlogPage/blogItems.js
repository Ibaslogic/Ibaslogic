import React, { useState, useEffect, useRef } from "react"

import Post from "../post"
import blogStyles from "./blogItems.module.scss"

const getCategories = items => {
  let tempItems = items.map(item => {
    return item.node.frontmatter.category
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["everything", ...categories]
  return categories
}

const BlogItems = props => {
  const node = useRef()
  const [items] = useState(props.items.allMdx.edges)
  const [blogPostItems, setBlogPostItems] = useState(props.items.allMdx.edges)
  const [categories] = useState(getCategories(props.items.allMdx.edges))
  const [showItems, setShowItems] = useState(false)
  const [selectedItem, setSelectedItem] = useState(
    getCategories(props.items.allMdx.edges) &&
    getCategories(props.items.allMdx.edges)[0]
  )

  const handleItems = category => {
    let tempItems = [...items]
    if (category === "everything") {
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

  const dropDown = () => {
    setShowItems(!showItems)
  }

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return
    }
    setShowItems(false)
  }

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick) // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [])

  if (items.length > 0) {
    return (
      <main className={blogStyles.main} role="main">
        <div className={blogStyles.container}>
          {/* categories filter */}
          <div className={blogStyles.filterPosts}>
            <span className={blogStyles.filterPostsHeading}>
              I want to learn about
            </span>

            <div
              ref={node}
              onClick={dropDown}
              className={`select__box ${blogStyles.selectBoxContainer}`}
            >
              <span className={blogStyles.selectedBoxItem}>{selectedItem}</span>
              <div className={blogStyles.selectBoxArrow}>
                <span
                  className={`${
                    showItems
                      ? `arrow___up ${blogStyles.selectBoxArrowUp}`
                      : `arrow__down ${blogStyles.selectBoxArrowDown}`
                    }`}
                ></span>
              </div>

              <div
                className={`drop__down ${blogStyles.dropDownContainer}`}
                style={{ display: showItems ? "block" : "none" }}
              >
                <ul className={blogStyles.dropDownList}>
                  {categories.map((category, index) => {
                    const listClass =
                      selectedItem === category ? `${blogStyles.selected}` : ""
                    return (
                      <li
                        key={index}
                        value={category}
                        onClick={() => handleItems(category)}
                        className={`${blogStyles.dropDownItem} ${listClass}`}
                      >
                        {category}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>

          <ul className={blogStyles.list}>
            {blogPostItems.map(({ node }) => {
              return (
                <Post
                  key={node.id}
                  title={node.frontmatter.title}
                  updated={node.frontmatter.dateUpdated}
                  posted={node.frontmatter.datePublished}
                  time={node.timeToRead}
                  fluid={node.frontmatter.featured.childImageSharp.fluid}
                  slug={node.fields.slug.name}
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
