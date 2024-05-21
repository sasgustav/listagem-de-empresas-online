module.exports = {
  siteMetadata: {
    title: `InfoCidadão`,
    description: `Seu guia completo de informações e serviços para o cidadão brasileiro.`,
    twitterUsername: `@infocidadao`,
    image: `/icon.png`,
    siteUrl: `https://www.seusite.com`, 
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    { // Configuração para imagens
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    { // Configuração para o diretório de listagem
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `directoryListing`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `DirectoryListing`,
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
    { // Configuração para as Gatsby Functions
      resolve: `gatsby-plugin-functions`,
      options: {
        // (Opcional) Configurações adicionais para o plugin
      },
    },
  ],
};
