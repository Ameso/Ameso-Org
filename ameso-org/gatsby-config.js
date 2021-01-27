/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetaData: {
    title: `Ameso`,
    description: `Employer and Contractor protocol on Ethereum`,
    author: `@AmesoProtocol`,
    menulinks: menu,
    siteUrl: `https://ameso.org`,
    repository: `https://github.com/ameso/ameso-org`,
    commit: process.env.NOW_GITHUB_COMMIT_SHA || `master`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `faq`,
        path: `${__dirname}/src/pages/faq`,
      },
    },
  ],
}
