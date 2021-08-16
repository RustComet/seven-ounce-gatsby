module.exports = {
  siteMetadata: {
    title: `Seven Ounce Software`,
    description: `The online home of Seven Ounce Software`,
    author: `@rustcomet`,
    siteUrl: `https://sevenounce.net/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `seven-ounce`,
        short_name: `7oz`,
        start_url: `/`,
        background_color: `#1b2a41`,
        theme_color: `#1b2a41`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
