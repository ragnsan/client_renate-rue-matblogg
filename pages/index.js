import { NextSeo } from "next-seo";
import { Box, FourFourFour, Grid, Layout } from "../components/1_Small/Base";
import { PrimaryButton, SecondaryButton } from "../components/1_Small/Buttons";
import { ArticleCard } from "../components/2_Big/ArticleCard";
import { Footer } from "../components/2_Big/Navigation/Footer";
import { Navbar } from "../components/2_Big/Navigation/Navbar";
import { HomeHero } from "../components/3_Pages/0_Home/0_HomeHero.js";
import { PopularArticles } from "../components/3_Pages/0_Home/1_PopularArticles";
import { ArticleCategories } from "../components/3_Pages/0_Home/2_ArticleCategories";

let client = require("contentful").createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

// export async function getStaticPaths() {
//   let data = await client.getEntries({
//     content_type: "brekraftigMat",
//   });
//   return {
//     paths: data.items.map((item) => ({
//       params: { slug: item.fields.slug },
//     })),
//     fallback: true,
//   };
// }

export async function getStaticProps({ params }) {
  let brekraftigMat = await client.getEntries({
    content_type: "brekraftigMat",
  });
  let hverdagsmat = await client.getEntries({
    content_type: "hverdagsmat",
  });
  let matForBarn = await client.getEntries({
    content_type: "matForBarn",
  });
  if (!brekraftigMat || !hverdagsmat || !matForBarn) {
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
        hverdagsmat: hverdagsmat.items,
        matForBarn: matForBarn.items,
      },
      revalidate: 60,
    };
  }
}

export default function Home({ brekraftigMat, matForBarn, hverdagsmat }) {
  return (
    <>
      <NextSeo
        title=""
        description=""
        openGraph={{
          title: "",
          description: "",
          images: [
            {
              url: "",
              width: "",
              height: "",
              alt: "",
            },
          ],
        }}
        twitter={{
          handle: "@skai_digital",
          site: "@skaidigital",
          cardType: "summary_large_image",
        }}
      />
      <Navbar />
      <HomeHero />
      <Layout>
        <PopularArticles
          brekraftigMat={brekraftigMat}
          hverdagsmat={hverdagsmat}
          matForBarn={matForBarn}
          sectionHeading="Populære artikler"
        />
        <ArticleCategories />
      </Layout>
      <Footer />
    </>
  );
}
