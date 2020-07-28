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
            id
            frontmatter {
              title
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

  //callback for sortByDateDescending in a related posts
  const sortByDateDescending = (a, b) => {
    const aPubDateInMS = new Date(a.publishedOn).getTime()
    const bPubDateInMS = new Date(b.publishedOn).getTime()

    if (aPubDateInMS > bPubDateInMS) {
      return 1
    }

    if (aPubDateInMS < bPubDateInMS) {
      return -1
    }

    return 0
  }

  //callback for related posts

  const getRelatedArticles = (currentArticle, articles) => {
    const MINIMUM_CATEGORIES_IN_COMMMON = 1

    const hasAtLeastOneCategoryInCommon = ({ node }) => {
      // console.log("@@@@@@ node", node)

      if (currentArticle.id === node.id) {
        return false
      }
      const commonCategories = _.intersection(
        currentArticle.frontmatter.tags,
        node.frontmatter.tags
      )

      return commonCategories.length >= MINIMUM_CATEGORIES_IN_COMMMON
    }

    const filteredResult = articles.filter(hasAtLeastOneCategoryInCommon)
    // console.log("@@@@@@@ lenght", filteredResult.length)

    if (filteredResult.length > 3) {
      return filteredResult.sort(sortByDateDescending).slice(0, 3)
    }
    // console.log("@@@@@@@ filter result", filteredResult)
    return filteredResult
  }

  res.data.allMdx.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.fields.slug.name}/`,
      component: blogTemplate,
      context: {
        slug: edge.node.fields.slug.name,
        postPath: edge.node.fields.slug.relativePath,
        //related articles
        relatedArticles: getRelatedArticles(edge.node, res.data.allMdx.edges),
      },
    })
  })

  //tags

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
