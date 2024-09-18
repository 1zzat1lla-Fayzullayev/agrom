/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemapUrls = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/proizvodstvo', changefreq: 'monthly', priority: 0.8 },
    { url: '/gallery', changefreq: 'monthly', priority: 0.8 },
    { url: '/testimonials', changefreq: 'monthly', priority: 0.8 },
    { url: '/invest', changefreq: 'monthly', priority: 0.8 },
    { url: '/contacts', changefreq: 'monthly', priority: 0.8 },
    { url: '/produkciya', changefreq: 'weekly', priority: 0.7 },
    { url: '/produkciya/koncentraty-pyure', changefreq: 'weekly', priority: 0.7 },
    { url: '/produkciya/koncentraty-pyure/tomatnaya', changefreq: 'monthly', priority: 0.6 },
    { url: '/produkciya/koncentraty-pyure/abrikosovoe', changefreq: 'monthly', priority: 0.6 },
    { url: '/produkciya/koncentraty-pyure/morkovnoe', changefreq: 'monthly', priority: 0.6 },
    { url: '/produkciya/koncentraty-pyure/persikovoe', changefreq: 'monthly', priority: 0.6 },
    { url: '/produkciya/koncentraty-pyure/slivovoe', changefreq: 'monthly', priority: 0.6 },
    { url: '/produkciya/koncentraty-pyure/svekolnoe', changefreq: 'monthly', priority: 0.6 },
    { url: '/produkciya/koncentraty-pyure/tikvennoe', changefreq: 'monthly', priority: 0.6 },
    { url: '/produkciya/koncentraty-pyure/yablochnoe', changefreq: 'monthly', priority: 0.6 },
    { url: '/produkciya/dried-vegetables', changefreq: 'weekly', priority: 0.7 },
    { url: '/produkciya/dried-vegetables/baklajan', changefreq: 'monthly', priority: 0.6 },
    { url: '/produkciya/dried-vegetables/bolgarskiy', changefreq: 'monthly', priority: 0.6 },
    { url: '/produkciya/dried-vegetables/kapusta', changefreq: 'monthly', priority: 0.6 },
    { url: '/produkciya/dried-vegetables/luk', changefreq: 'monthly', priority: 0.6 },
    { url: '/produkciya/dried-vegetables/lukzeleniy', changefreq: 'monthly', priority: 0.6 },
    { url: '/produkciya/dried-vegetables/morkov', changefreq: 'monthly', priority: 0.6 },
    { url: '/produkciya/dried-vegetables/perec', changefreq: 'monthly', priority: 0.6 },
    { url: '/produkciya/dried-vegetables/petrushka', changefreq: 'monthly', priority: 0.6 },
    { url: '/produkciya/dried-vegetables/pomidor', changefreq: 'monthly', priority: 0.6 },
    { url: '/produkciya/dried-vegetables/svekla', changefreq: 'monthly', priority: 0.6 },
    { url: '/produkciya/dried-vegetables/tikva', changefreq: 'monthly', priority: 0.6 },
    { url: '/produkciya/dried-vegetables/ukrop', changefreq: 'monthly', priority: 0.6 },
    { url: '/produkciya/dried-fruits', changefreq: 'weekly', priority: 0.7 },
    { url: '/produkciya/dried-fruits/yabloko', changefreq: 'monthly', priority: 0.6 },
    { url: '/produkciya/dried-fruits/hurma', changefreq: 'monthly', priority: 0.6 },
];

const stream = new SitemapStream({ hostname: 'https://agrom.uz' });
const writeStream = createWriteStream('./public/siteMap.xml');

stream.pipe(writeStream);

sitemapUrls.forEach(url => {
    stream.write(url);
});

stream.end();

streamToPromise(stream)
    .then(data => console.log('Sitemap successfully generated'))
    .catch(err => console.error('Error generating sitemap:', err));