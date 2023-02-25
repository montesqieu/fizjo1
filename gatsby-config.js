/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `fizjopersonalny`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              related: false,
              noIframeBorder: true,
              loadingStrategy: 'lazy',
            }
          },
          "gatsby-remark-responsive-iframe",
        ]
      }
    },
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options : {
        name: `articles`,
        path: `${__dirname}/src/articles/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options : {
        name: `feedback`,
        path: `${__dirname}/src/feedback/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options : {
         name: `images`,
        path: `${__dirname}/src/images/`,
       },
    },
  ],
}