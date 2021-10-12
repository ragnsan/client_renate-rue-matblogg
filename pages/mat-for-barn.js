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

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: "matForBarn",
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

export default function matForBarn({ blog }) {
  return (
    <>
      <Navbar />
      <div style={{ background: "#A6EDF0" }}>
        <Layout>
          <PopularArticles blog={blog} sectionHeading="Mat for barn" />
        </Layout>
      </div>
      <Footer />
    </>
  );
}
