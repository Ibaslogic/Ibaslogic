require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Ibaslogic`,
    description: `Here, you'll learn all the rudiment of web development`,
    author: `Ibas Majid`,
    twitterHandle: `ibaskunle`,
    siteUrl: `https://ibaslogic.netlify.com`,
  },
  plugins: [
    `gatsby-plugin-catch-links`,
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
                  date: edge.node.frontmatter.dateUpdated,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug.name,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug.name,
                  custom_elements: [{ "content:encoded": edge.node.body }]
                });
              });
            },
            query: `
            {
              allMdx(
                sort: { order: DESC, fields: [frontmatter___dateUpdated] },
              ) {
                edges {
                  node {
                    excerpt
                    body
                    fields { 
                      slug {
                        name
                      }
                    }
                    frontmatter {
                      title
                      dateUpdated
                    }
                  }
                }
              }
            }
            `,
            output: "/rss.xml",
            title: "Your Site's RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/blog/"
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://netlify.us17.list-manage.com/subscribe/post?u=6c865ee0b82dcd3f851e6829a&amp;id=dfefb54d80", // add your MC list endpoint here; see instructions below
      },
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //   },
    // },
    `gatsby-plugin-react-helmet`,
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
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
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
        icon: `src/images/ibaslogic_icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
