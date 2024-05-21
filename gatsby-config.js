module.exports = {
  siteMetadata: {
    title: `Seu Site Incrível`,
    description: `A melhor descrição do seu site`,
    twitterUsername: `@seu_twitter`,
    image: `/icon.png`,
    siteUrl: `https://www.seusite.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-postcss`, 
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://www.seusite.com`,
        sitemap: `https://www.seusite.com/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby + Vercel`,
        short_name: `Gatsby + Vercel`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
      options: {
        htmlAttributes: {
          lang: `pt-br`,
        },
        mergeDefaultHelmet: false,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "SEU_ID_DO_GOOGLE_ANALYTICS",
      },
    },
    `gatsby-plugin-mdx`, 
  ],
};
