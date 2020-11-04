import React, { useState, useEffect, useRef } from "react"
import Article from "../article"
import articlePageStyles from "./articlePage.module.scss"

const getCategories = items => {
  let tempItems = items.map(item => {
    return item.node.frontmatter.category
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["everything", ...categories]
  return categories
}

const ArticlePage = (props) => {

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
      <main className={articlePageStyles.main} role="main">
        <div className={articlePageStyles.container}>
        <h2 className={articlePageStyles.filterPosts}>
            <span className={articlePageStyles.filterPostsHeading}>
              I want to learn about
            </span>

            <div
              ref={node}
              onClick={dropDown}
              className={`select__box ${articlePageStyles.selectBoxContainer}`}
            >
              <span className={articlePageStyles.selectedBoxItem}>{selectedItem}</span>
              <div className={articlePageStyles.selectBoxArrow}>
                <span
                  className={showItems ? `${articlePageStyles.selectBoxArrowUp} arrow___up` : `${articlePageStyles.selectBoxArrowDown} arrow__down`}
                ></span>
              </div>

              <div
                className={`drop__down ${articlePageStyles.dropDownContainer}`}
                style={{ display: showItems ? "block" : "none" }}
              >
                <ul className={articlePageStyles.dropDownList}>
                  {categories.map((category, index) => {
                    const listClass =
                    selectedItem === category ? `${articlePageStyles.selected}` : ""
                    return (
                      <li key={index}
                      value={category}
                      onClick={() => handleItems(category)}
                      className={`${articlePageStyles.dropDownItem} ${listClass}`}
                      >
                        {category}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </h2>
          <ul className={articlePageStyles.list}>
            {blogPostItems.map(({ node }) => {
              const {frontmatter, id, timeToRead, excerpt, fields} = node
              const {title, dateUpdated, tags, datePublished, featured} = frontmatter
              return (
                <Article
                  key={id}
                  title={title}
                  tags={tags}
                  excerpt={excerpt}
                  updated={dateUpdated}
                  posted={datePublished}
                  time={timeToRead}
                  fixed={featured && featured.childImageSharp.fixed}
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
      <main className={articlePageStyles.main} role="main">
        <div className={articlePageStyles.container}>
          <p>There are no posts to display...please add items</p>
        </div>
      </main>
    )
  }
}
export default ArticlePage