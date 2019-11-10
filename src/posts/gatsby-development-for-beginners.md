---
title: "Consectetur adipiscing elit ipsum dolor sit amet"
description: "Understanding how the DOM works will help you to quickly grasp the concept behind the Virtual DOM that React provides for us"
# slug: "Understanding the DOM"
date: "2019-11-10T10:51:46+02:00"
category: "lorem"
image: "./thumbnails/Image35.png"
tags:
  - Lorem ipsum
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.

tempor.incididunt ut labore et dolore magna aliqua. Ut enim ad minim [Node.js](https://nodejs.org/en/) veniam, quis nostrud..

![Screen Shot](./post-images/lorem-ipsum/Image38.png)

## exercitation ullamco

laboris nisi ut aliquip ex ea _commodo_ consequat. Duis aute irure dolor in reprehenderit in `voluptate` velit esse cillum dolore eu fugiat nulla pariatur.

![Screen Shot](./post-images/lorem-ipsum/Image35.png)

## Excepteur sint occaecat

cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Excepteur sint occaecat

cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```javascript
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    console.log("######################", node.fileAbsolutePath)
    const slug = path.basename(node.fileAbsolutePath, ".md")
    //const slug = slugify(node.frontmatter.slug)
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}
```

cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
