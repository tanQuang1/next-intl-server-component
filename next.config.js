// /** @type {import('next').NextConfig} */

// const withNextIntl = require("next-intl/plugin")(
//   // This is the default (also the `src` folder is supported out of the box)
//   "./i18n.ts"
// );

// const nextConfig = withNextIntl({
//   // devIndicators: {
//   //   buildActivity: true,
//   //   buildActivityPosition: "bottom-right",
//   // },
//   // env: {
//   //   my_env: "test",
//   // },
//   // eslint: {
//   //   ignoreDuringBuilds: true,
//   // },
// });

// module.exports = nextConfig;
// import"./i18n.ts"
const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./i18n.ts"
);

module.exports = withNextIntl({
  // Other Next.js configuration ...
});
