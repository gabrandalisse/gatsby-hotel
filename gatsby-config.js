module.exports = {
  siteMetadata: {
    title: `The Fall Hotel`,
    description: `A landing page for The Fall Hotel made with Gatsby.`,
    author: `Gabriel Andres Brandalisse`,
  },
  plugins: [
    `gatsby-plugin-emotion`, 
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
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
        icon: `src/images/gatsby-icon.png`, 
      },
    },
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: '4854745637aa9728f47ba6c87942a8'
      }
    }
  ],
}
