const path = require("path")
const _ = require("lodash")
const { slugify } = require("./src/util/utilityFunction")

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === "MarkdownRemark") {
//     //const slug = path.basename(node.fileAbsolutePath, ".md")
//     const slug = slugify(node.frontmatter.title)
//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//   }
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const tagTemplate = path.resolve("./src/templates/tags-page.js")

  const res = await graphql(`
    query {
      allContentfulBlogPostContent {
        edges {
          node {
            slug
            tags
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPostContent.edges.forEach(edge => {
    createPage({
      path: `/blog/${_.kebabCase(edge.node.slug)}/`,
      component: blogTemplate,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  let tags = []
  _.each(res.data.allContentfulBlogPostContent.edges, edge => {
    if (_.get(edge, "node.tags")) {
      tags = tags.concat(edge.node.tags)
    }
  })

  // Eliminate duplicate tags
  tags = _.uniq(tags)

  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagTemplate,
      context: {
        tag,
      },
    })
  })
}
