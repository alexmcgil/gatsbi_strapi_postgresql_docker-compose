module.exports = {
    siteMetadata: {
      title: `gatsby`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            resolve: `gatsby-source-strapi`,
            options: {
                apiURL: `http://localhost:1337`,
                contentTypes: [
                    `article`,
                    `user`,
                ],
                queryLimit: 1000,
                collectionTypes: [`article`, `user`],
            }
        }
    ]
}