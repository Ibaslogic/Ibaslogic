const path = require("path")
const _ = require("lodash")
// const { slugify } = require("./src/util/utilityFunction")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const slug = path.basename(node.fileAbsolutePath)
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const tagTemplate = path.resolve("./src/templates/tags-page.js")

  const res = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              tags
            }
            fields {
              slug {
                name
                relativePath
              }
            }
          }
        }
      }
    }
  `)

  res.data.allMdx.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.fields.slug.name}/`,
      component: blogTemplate,
      context: {
        slug: edge.node.fields.slug.name,
        postPath: edge.node.fields.slug.relativePath,
      },
    })
  })

  let tags = []
  _.each(res.data.allMdx.edges, edge => {
    if (_.get(edge, "node.frontmatter.tags")) {
      tags = tags.concat(edge.node.frontmatter.tags)
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
