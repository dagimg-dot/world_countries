// apollo.config.js
export const client = {
    service: {
        name: 'world_countries',
        // URL to the GraphQL API
        url: 'https://countries.trevorblades.com/',
    },
    // Files processed by the extension
    includes: [
        'src/**/*.vue',
        'src/**/*.js',
    ],
};