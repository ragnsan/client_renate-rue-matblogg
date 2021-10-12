import { NextSeo } from "next-seo";
import { Box, FourFourFour, Grid, Layout } from "../components/1_Small/Base";
import { PrimaryButton, SecondaryButton } from "../components/1_Small/Buttons";
import { ArticleCard } from "../components/2_Big/ArticleCard";
import { Footer } from "../components/2_Big/Navigation/Footer";
import { Navbar } from "../components/2_Big/Navigation/Navbar";
import { HomeHero } from "../components/3_Pages/0_Home/0_HomeHero.js";
import { PopularArticles } from "../components/3_Pages/0_Home/1_PopularArticles";
import { ArticleCategories } from "../components/3_Pages/0_Home/2_ArticleCategories";

export default function Home() {
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
        <PopularArticles />
        <ArticleCategories />
      </Layout>
      <Footer />
    </>
  );
}
