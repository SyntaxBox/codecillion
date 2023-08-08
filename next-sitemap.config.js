/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://codecillion.com",
  generateRobotsTxt: true, // (optional)
  exclude: ["/admin", "/posts-sitemap.xml"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: ["/admin", "admin"],
      },
    ],
  },
  additionalSitemaps: [
    "https://codecillion/sitemap.xml",
    "https://codecillion/posts-sitemap.xml",
  ],
};
