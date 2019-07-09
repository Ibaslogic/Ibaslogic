import React, { Component } from "react"

import Post from "../post"
import blogStyles from "./blogItems.module.scss"

const getCategories = items => {
  let tempItems = items.map(item => {
    return item.node.category
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
      items: props.items.allContentfulBlogPostContent.edges,
      blogPostItems: props.items.allContentfulBlogPostContent.edges,
      categories: getCategories(props.items.allContentfulBlogPostContent.edges),
    }
  }

  handleItems = event => {
    let category = event.target.value
    let tempItems = [...this.state.items]
    if (category === "everything") {
      this.setState(() => {
        return {
          blogPostItems: tempItems,
        }
      })
    } else {
      let items = tempItems.filter(({ node }) => node.category === category)
      this.setState(() => {
        return {
          blogPostItems: items,
        }
      })
    }
  }

  render() {
    if (this.state.items.length > 0) {
      return (
        <main className={blogStyles.main} role="main">
          <div className={blogStyles.container}>
            {/* categories filter */}
            <div className={blogStyles.filterPosts}>
              <p>
                I want to learn about
                <span>
                  <select onChange={this.handleItems}>
                    {this.state.categories.map((category, index) => {
                      return (
                        <option key={index} value={category}>
                          {category}
                        </option>
                      )
                    })}
                  </select>{" "}
                </span>
              </p>
            </div>

            <ul className={blogStyles.list}>
              {this.state.blogPostItems.map(({ node }) => {
                return (
                  <Post
                    key={node.id}
                    title={node.title}
                    date={node.publishedDate}
                    time={node.timeToRead}
                    fluid={node.image.fluid}
                    slug={node.slug}
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
