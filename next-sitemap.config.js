/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:'https://www.yedoye.live',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  exclude: ['/server-sitemap.xml'], 
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.yedoye.live/server-sitemap.xml',
    ],
  },
}