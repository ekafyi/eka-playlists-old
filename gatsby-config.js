module.exports = {
  siteMetadata: {
    title: 'Eka is listening to...',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`
  ]
}
