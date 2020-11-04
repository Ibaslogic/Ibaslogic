module.exports = {
  siteMetadata: {
    title: `Ibaslogic`,
    description: `Looking for a simple and smarter way to learn the latest web tech? Here, you will learn the perfect strategy that works.`,
    author: `Ibas Majid`,
    twitterHandle: `ibaslogic`,
    linkedin: `ibaslogic`,
    facebook: `ibaslogic`,
    github: `ibaslogic`,
    email: `ibas@ibaslogic.com`,
    author_avatar: `ibas_avartar.png`,
    siteUrl: `https://ibaslogic.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`300`, `400`, `500`, `700`],
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-use-dark-mode",
      options: {
        classNameDark: "dark-mode",
        classNameLight: "light-mode",
        storageKey: "darkMode",
        minify: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-154777810-1",
        // this option places the tracking script into the head of the DOM
        head: true,
        // other options
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#fb6318`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // I exclude individual tags pages in sitemap
        exclude: ["/tags/*"],
      },
    },
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.datePublished,
                  url:
                    site.siteMetadata.siteUrl +
                    "/" +
                    edge.node.fields.slug.name +
                    "/",
                  guid:
                    site.siteMetadata.siteUrl +
                    "/" +
                    edge.node.fields.slug.name +
                    "/",
                  enclosure: edge.node.frontmatter.featured && {
                    url:
                      site.siteMetadata.siteUrl +
                      edge.node.frontmatter.featured.publicURL,
                  },
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
            {
              allMdx(
                limit: 1000
                sort: { order: DESC, fields: [frontmatter___datePublished] },
              ) {
                edges {
                  node {
                    excerpt(pruneLength: 300)
                    html
                    fields { 
                      slug {
                        name
                      }
                    }
                    frontmatter {
                      title
                      datePublished
                      featured {
                        publicURL
                      }
                    }
                  }
                }
              }
            }
            `,
            output: "/rss.xml",
            title: "Ibaslogic | RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            // match: "^/blog/",
          },
        ],
      },
    },

    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://ibaslogic.us4.list-manage.com/subscribe/post?u=bf8734e0f65fbe914de814264&amp;id=efcaf11c5c",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/contents/articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `series`,
        path: `${__dirname}/src/contents/series`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`, //`gatsby-transformer-remark`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-relative-images`,
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              linkImagesToOriginal: false,
              backgroundColor: `#eaeaea`,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener",
            },
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ibaslogic`,
        short_name: `ibas`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/site_favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
