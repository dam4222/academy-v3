const sm = require('sitemap')
const path = require('path')
const { blogs, projects } = require('./dynamicLinks');

let sitemap;

const createMap = async () => {

  //fetching blogs from dynamicLink.js and appending it to the sitemap
  sitemap = sm.createSitemap({
    hostname: 'https://academyux.com',
    cacheTime: 600000 // 600 sec - cache purge period
  });

  await blogs().then((posts) => {
    posts.map((post) => {
      sitemap.add({
        url: `/post?${post.slug}`,
        changefreq: 'daily',
        priority: 0.9
      })
    })
  })
  .catch(err => console.error(err))

  //fetching projects from dynamicLink.js and appending it to the sitemap
  await projects().then((posts) => {
    posts.map((project) => {
      sitemap.add({
        url: `/project?${project.slug}`,
        changefreq: 'daily',
        priority: 0.9
      })
    })
  })
  .catch(err => console.error(err))

  sitemap.add({
    url: '/process',
    changefreq: 'daily',
    priority: 1
  })

  sitemap.add({
    url: '/services',
    changefreq: 'daily',
    priority: 1
  })

  sitemap.add({
    url: '/workshops',
    changefreq: 'daily',
    priority: 1
  })

  sitemap.add({
    url: '/work',
    changefreq: 'daily',
    priority: 1
  })

  sitemap.add({
    url: '/blog',
    changefreq: 'daily',
    priority: 1
  })

  sitemap.add({
    url: '/about',
    changefreq: 'daily',
    priority: 1
  })

  sitemap.add({
    url: '/contact',
    changefreq: 'daily',
    priority: 1
  })
}


const setup = async ({ server }) => {

  server.get('/sitemap.xml', async (req, res) => {
    //creating sitemap for everyrequest
    await createMap();
    await sitemap.toXML((err, xml) => {
      if (err) {
        res.status(500).end()
        return
      }

      res.header('Content-Type', 'application/xml')
      res.send(xml)
    })
  })

  server.get('/robots.txt', (req, res) => {
    res.sendFile(path.join(__dirname, '../static', 'robots.txt'))
  })
}

module.exports = setup
