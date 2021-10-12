import { NextSeo } from "next-seo";
import { Layout } from "../components/1_Small/Base";
import { ArticleCard } from "../components/2_Big/ArticleCard";
import { Footer } from "../components/2_Big/Navigation/Footer";
import { Navbar } from "../components/2_Big/Navigation/Navbar";
import { PopularArticles } from "../components/3_Pages/0_Home/1_PopularArticles";

let client = require("contentful").createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: "brekraftigMat",
    // content_type: "hverdagsmat",
    // content_type: "matForBarn",
    // "fields.slug": params.slug,
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
        blog: data.items,
      },
      revalidate: 60,
    };
  }
}

export default function baerekraftigMat({ blog }) {
  console.log(blog);
  return (
    <>
      <Navbar />
      <Layout>
        <PopularArticles blog={blog} heading="Bærekraftig mat" />
      </Layout>
      <Footer />
    </>
  );
}
