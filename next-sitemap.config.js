/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:'https://www.yedoye.live',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/server-sitemap.xml'], 
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.yedoye.live/server-sitemap.xml',
    ],
  },
}