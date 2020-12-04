const path = require("path")
const _ = require("lodash")

module.exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const slug = path.basename(node.fileAbsolutePath)

    // To filter by source instance - i.e mdx files in the 'src/...' directory

    // let's get all the source instance from the parent node.
    const collection = getNode(node.parent).sourceInstanceName

    // Then create field called "collection" having all the parent source instance.
    createNodeField({
      node,
      name: "collection",
      value: collection,
    })

    // creating slug field
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

// Now, let's create pages

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const seriesTemplate = path.resolve("./src/templates/series.js")
  const articleTemplate = path.resolve("./src/templates/article.js")
  const tagTemplate = path.resolve("./src/templates/tags-page.js")

  const res = await graphql(`
    query {
      allMdx(sort: { fields: [frontmatter___dateUpdated], order: DESC }) {
        edges {
          node {
            id 
            frontmatter {
              title
              tags
            }
            fields {
              collection
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

    if (filteredResult.length > 2) {
      return filteredResult.sort(sortByDateDescending).slice(0, 2)
    }
    return filteredResult
  }

  const allPosts = res.data.allMdx.edges

  const seriesPosts = allPosts.filter(
    edge => edge.node.fields.collection === `series`
  )

  const articlesPosts = allPosts.filter(
    edge => edge.node.fields.collection === `articles`
  )

  seriesPosts.forEach(({ node }) => {
    createPage({
      path: `/${node.fields.slug.name}/`,
      component: seriesTemplate,
      context: {
        slug: node.fields.slug.name,
        postPath: node.fields.slug.relativePath,
      },
    })
  })

  articlesPosts.forEach(({ node }, index) => {
    const prev =
      index === articlesPosts.length - 1 ? null : articlesPosts[index + 1].node
    const next = index === 0 ? null : articlesPosts[index - 1].node

    createPage({
      path: `/${node.fields.slug.name}/`,
      component: articleTemplate,
      context: {
        slug: node.fields.slug.name,
        postPath: node.fields.slug.relativePath,
        prev,
        next,
        //related articles
        relatedArticles: getRelatedArticles(node, articlesPosts),
      },
    })
  })

  //tags

  let tags = []
  _.each(allPosts, edge => {
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
