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
  let brekraftigMat = await client.getEntries({
    content_type: "brekraftigMat",
  });
  if (!brekraftigMat) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        brekraftigMat: brekraftigMat.items,
      },
      revalidate: 60,
    };
  }
}

export default function baerekraftigMat({ brekraftigMat }) {
  return (
    <section className="min-h-100">
      <NavbarWhite />
      <div
        className="min-h-100 flex flex-col justify-between"
        style={{ background: "#C6EBC9" }}
      >
        <Layout>
          <PopularArticles
            brekraftigMat={brekraftigMat}
            sectionHeading="Bærekraftig mat"
          />
        </Layout>
        <Footer />
      </div>
    </section>
  );
}
