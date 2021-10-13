import { NextSeo } from "next-seo";
import { Layout } from "../components/1_Small/Base";
import { ArticleCard } from "../components/2_Big/ArticleCard";
import { Footer } from "../components/2_Big/Navigation/Footer";
import { Navbar } from "../components/2_Big/Navigation/Navbar";
import { NavbarWhite } from "../components/2_Big/Navigation/NavbarWhite";
import { PopularArticles } from "../components/3_Pages/0_Home/1_PopularArticles";

let client = require("contentful").createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  let matForBarn = await client.getEntries({
    content_type: "matForBarn",
  });
  if (!matForBarn) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        matForBarn: matForBarn.items,
      },
      revalidate: 60,
    };
  }
}

export default function matForBarn({ matForBarn }) {
  return (
    <>
      <NavbarWhite />
      <div
        style={{ background: "#A6EDF0" }}
        className="min-h-100 flex flex-col justify-between"
      >
        <Layout>
          <PopularArticles
            matForBarn={matForBarn}
            sectionHeading="Mat for barn"
          />
        </Layout>
        <Footer />
      </div>
    </>
  );
}
