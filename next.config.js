/** @type {import('next').NextConfig} */

const nextConfig = {
    swcMinify: true,
    distDir: 'build',
    cleanDistDir: true,
    reactStrictMode: true,
    staticPageGenerationTimeout: 300,
    // images: {
    //     loader: 'imgix',
    //     path: 'APP_PATH',
    // },
}

// module.exports = {
//     webpack(config) {
//         config.module.rules.push({
//             test: /\.svg$/,
//             use: ["@svgr/webpack"]
//         });

//         return config;
//     }
// };

module.exports = nextConfig

