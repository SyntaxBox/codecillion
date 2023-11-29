/** @type {import('next-sitemap').IConfig} */

siteUrl = "https://codecillion.com";

module.exports = {
  siteUrl,
  generateRobotsTxt: true, // (optional)
  exclude: ["/admin"],
  additionalSitemaps: [
    `${siteUrl}/posts-sitemap.xml`,
    `${siteUrl}/courses-sitemap.xml`,
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteUrl}/posts-sitemap.xml`,
      `${siteUrl}/courses-sitemap.xml`,
    ],
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: ["/admin", "/admin/*"],
      },
    ],
  },
};
