import React, { Component } from "react"

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

class BlogItems extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.allMdx.edges,
      blogPostItems: props.items.allMdx.edges,
      categories: getCategories(props.items.allMdx.edges),
      showItems: false,
      selectedItem:
        getCategories(props.items.allMdx.edges) &&
        getCategories(props.items.allMdx.edges)[0],
    }
  }

  handleItems = category => {
    // let category = event.target.value
    let tempItems = [...this.state.items]
    if (category === "everything") {
      this.setState(() => {
        return {
          blogPostItems: tempItems,
          //showItems: false,
          selectedItem: category,
        }
      })
    } else {
      let items = tempItems.filter(
        ({ node }) => node.frontmatter.category === category
      )
      this.setState(() => {
        return {
          blogPostItems: items,
          //showItems: false,
          selectedItem: category,
        }
      })
    }
  }

  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems,
    }))
  }

  render() {
    if (this.state.items.length > 0) {
      return (
        <main className={blogStyles.main} role="main">
          <div className={blogStyles.container}>
            {/* categories filter */}
            <div className={blogStyles.filterPosts}>
              <span className={blogStyles.filterPostsHeading}>
                I want to learn about
              </span>

              <div
                onClick={this.dropDown}
                className={blogStyles.selectBoxContainer}
              >
                <span className={blogStyles.selectedBoxItem}>
                  {this.state.selectedItem}
                </span>
                <div className={blogStyles.selectBoxArrow}>
                  <span
                    className={`${
                      this.state.showItems
                        ? `${blogStyles.selectBoxArrowUp}`
                        : `${blogStyles.selectBoxArrowDown}`
                    }`}
                  ></span>
                </div>

                <div
                  className={blogStyles.dropDownContainer}
                  style={{ display: this.state.showItems ? "block" : "none" }}
                >
                  <ul className={blogStyles.dropDownList}>
                    {this.state.categories.map((category, index) => {
                      const listClass =
                        this.state.selectedItem === category
                          ? `${blogStyles.selected}`
                          : ""
                      return (
                        <li
                          key={index}
                          value={category}
                          onClick={() => this.handleItems(category)}
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
              {this.state.blogPostItems.map(({ node }) => {
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
}

export default BlogItems
