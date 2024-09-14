/* eslint-disable no-undef */
const sitemap = require('sitemap');
const fs = require('fs');

const sitemapUrls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/proizvodstvo', changefreq: 'monthly', priority: 0.8 },
  { url: '/gallery', changefreq: 'monthly', priority: 0.8 },
];

const sitemapXML = sitemap.createSitemap({
  hostname: 'https://eduagency.uz/',
  cacheTime: 600000,
  urls: sitemapUrls
}).toString();

fs.writeFileSync('/public/siteMap.xml', sitemapXML);
