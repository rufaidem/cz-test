module.exports = {
  siteMetadata: {
    siteUrl: "https://czodiac.com",
    title: "CZodiac - Defi NFT Games on BSC",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CZodiac`,
        short_name: `CZodiac`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `./src/images/czodiac-coin.png`
      }
    }
  ]
};
