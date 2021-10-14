//
// Hente access token og space token fra .env.local
//
let client = require("contentful").createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

//   const sitemapGenerator = new ContentfulSitemap(client, [routes], {options});

const sitemapGenerator = new ContentfulSitemap(client, [
  {
    pattern: "/",
    id: "[HOME_PAGE_ID]",
  },
  {
    pattern: "/om-renate",
    id: "[ABOUT_PAGE_ID]",
    priority: 0.7,
  },
  {
    pattern: "/baerekraftig-mat/:slug",
    priority: 0.5,
    query: {
      content_type: "[brekraftigMAt]",
      select: "fields.slug",
    },
    params: {
      slug: "fields.slug",
    },
  },
  {
    pattern: "/hverdagsmat/:slug",
    priority: 0.5,
    query: {
      content_type: "[hverdagsmat]",
      select: "fields.slug",
    },
    params: {
      slug: "fields.slug",
    },
  },
  {
    pattern: "/mat-for-barn/:slug",
    priority: 0.5,
    query: {
      content_type: "[matForBarn]",
      select: "fields.slug",
    },
    params: {
      slug: "fields.slug",
    },
  },
  //   {
  //     url: "/terms",
  //     priority: 0.3,
  //   },
  //   {
  //     url: "/privacy",
  //     priority: 0.3,
  //   },
]);

let sitemap;

app.get("/sitemap.xml", (req, res) => {
  res.header("Content-Type", "application/xml");
  res.header("Content-Encoding", "gzip");

  if (sitemap) {
    return res.send(sitemap);
  }

  try {
    const smStream = new SitemapStream({ hostname: "https://example.com/" });
    const pipeline = smStream.pipe(createGzip());

    return sitemapGenerator
      .buildRoutes()
      .then((routes) => {
        // pipe your entries or directly write them.
        routes.forEach((route) => smStream.write(route));
        smStream.end();

        // cache the response
        streamToPromise(pipeline).then((sm) => (sitemap = sm));
        // stream write the response
        pipeline.pipe(res).on("error", (e) => {
          throw e;
        });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).end();
      });
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
});
