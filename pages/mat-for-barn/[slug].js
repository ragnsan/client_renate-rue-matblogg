//
// Redirect til 404-page hvis siden ikke greier å loade

import { BlogHero } from "../../components/3_Pages/1_Blog/0_BlogHero";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  FourEightSix,
  FourSixSix,
  Grid,
  Layout,
} from "../../components/1_Small/Base";
import { options } from "../../components/1_Small/ContentfulOptions";
import { Navbar } from "../../components/2_Big/Navigation/Navbar";
import { Footer } from "../../components/2_Big/Navigation/Footer";
import { BlogSocialSharing } from "../../components/1_Small/BlogSocialSharing";
import { BlogReferences } from "../../components/2_Big/BlogReferences";
import Breadcrumbs from "../../components/1_Small/Breadcrumbs";
import { NextSeo } from "next-seo";
import { ArticleJsonLd } from "next-seo";
import { useRouter } from "next/router";
// import { useRouter } from "next/router";

//
function RedirectPage() {
  const router = useRouter();
  if (typeof window !== "undefined") {
    router.push("/404");
  }
}
//
// Hente access token og space token fra .env.local
//
let client = require("contentful").createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});
//
// Hente url/path fra CMS som har content type "blogPost"
//
export async function getStaticPaths() {
  let data = await client.getEntries({
    content_type: "matForBarn",
  });

  return {
    paths: data.items.map((item) => ({
      params: { slug: item.fields.slug },
    })),

    fallback: true,
  };
}
//
// Hent data fra CMS, og hvis det ikke går, redirect til homepage
//
export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: "matForBarn",
    "fields.slug": params.slug,
  });

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        blog: data.items[0].fields,
      },
      revalidate: 60,
    };
  }
}

export default function blog({ blog }) {
  if (!blog) {
    return <div>{RedirectPage()}</div>;
  }

  console.log(blog);
  return (
    <>
      <NextSeo
        title={blog.overskrift}
        description={blog.beskrivelse}
        openGraph={{
          title: `${blog.overskrift}`,
          description: `${blog.beskrivelse}`,
          images: [
            {
              url: `${"https:" + blog.hovedbilde.fields.file.url}`,
              width: `${blog.hovedbilde.fields.file.details.image.width}`,
              height: `${blog.hovedbilde.fields.file.details.image.height}`,
              alt: `${blog.hovedbilde.fields.description}`,
            },
          ],
        }}
        robotsProps={{
          nosnippet: false,
          notranslate: false,
          noimageindex: false,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: "none",
          maxVideoPreview: -1,
        }}
      />

      <ArticleJsonLd
        // har ikke alle ting som burde vær med. Så om du er her ved et senere prosjekt, Ragnsan, se på docs til NextSeo for å sørge for at alt er med
        url={URL}
        title={blog.title}
        datePublished={blog.dato}
        authorName={blog.person.fields.name}
        publisherName={"Renate Rue"}
        description={blog.beskrivelse}
      />
      <div>
        <Navbar />
        <Layout>
          <Grid>
            <FourEightSix c="lg:col-start-4 my-56 md:my-80">
              <Breadcrumbs kategori="Mat for barn" />
              <BlogHero heading={blog.overskrift} blog={blog} />
              {documentToReactComponents(blog.innhold, options)}
              <BlogSocialSharing blog={blog} category="matForBarn" />
              <BlogReferences blog={blog} />
            </FourEightSix>
          </Grid>
        </Layout>
        <Footer />
      </div>
    </>
  );
}
