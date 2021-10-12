//
// Redirect til 404-page hvis siden ikke greier å loade

import { BlogHero } from "../components/3_Pages/1_Blog/0_BlogHero";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  FourEightSix,
  FourSixSix,
  Grid,
  Layout,
} from "../components/1_Small/Base";
import { options } from "../components/1_Small/ContentfulOptions";
import { Navbar } from "../components/2_Big/Navigation/Navbar";
import { Footer } from "../components/2_Big/Navigation/Footer";
import { BlogSocialSharing } from "../components/1_Small/BlogSocialSharing";
import { BlogReferences } from "../components/2_Big/BlogReferences";
import Breadcrumbs from "../components/1_Small/Breadcrumbs";
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
    content_type: "brekraftigMat",
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
    content_type: "brekraftigMat",
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
    <div>
      <Navbar />
      <Layout>
        <Grid>
          <FourEightSix c="lg:col-start-4 my-56 md:my-80">
            <Breadcrumbs kategori="Bærekraftig mat" />
            <BlogHero heading={blog.overskrift} blog={blog} />
            {documentToReactComponents(blog.innhold, options)}
            <BlogSocialSharing />
            <BlogReferences blog={blog} />
          </FourEightSix>
        </Grid>
      </Layout>
      <Footer />
    </div>
  );
}
