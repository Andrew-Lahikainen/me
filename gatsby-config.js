require('ts-node').register({ files: true })
const postcssPresetEnv = require('postcss-preset-env')
const postcssNormalize = require('postcss-normalize')

module.exports = {
  siteMetadata: {
    title: `andrewlahikainen.com`,
    description: `yo`,
    author: `@andrewlahikainen`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-codegen',
      options: {
        watch: process.env.NODE_ENV === 'development',
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [postcssPresetEnv({ stage: 2 }), postcssNormalize()],
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
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Work Sans`,
            variants: [300, 400, 500, 600, 700],
          },
        ],
      },
    },
    `gatsby-plugin-svg-sprite`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
