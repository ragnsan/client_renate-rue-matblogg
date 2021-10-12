import { FourFourFour, Grid } from "../../1_Small/Base";
import { ArticleCard } from "../../2_Big/ArticleCard";

const data = [
  {
    articleTitle:
      "Sunne matretter for hele familie (Selv for dere som er kresne)",
    articleCategory: "Bærekraftig",
    imgSrc: "hvit3_bpacx2.jpg",
    imgAlt: "Dette er en alt",
  },
  {
    articleTitle: "Hverdagslunsjer som funker for alle",
    articleCategory: "Hverdagsmat",
    imgSrc: "hvit3_bpacx2.jpg",
    imgAlt: "Dette er en alt",
  },
  {
    articleTitle:
      "Sunne matretter for hele familie (Selv for dere som er kresne)",
    articleCategory: "For barn",
    imgSrc: "hvit3_bpacx2.jpg",
    imgAlt: "Dette er en alt",
  },
  {
    articleTitle:
      "Sunne matretter for hele familie (Selv for dere som er kresne)",
    articleCategory: "Bærekraftig",
    imgSrc: "hvit3_bpacx2.jpg",
    imgAlt: "Dette er en alt",
  },
];

const MapData = () => {
  return data.map(({ articleTitle, articleCategory, imgSrc, imgAlt }) => {
    return (
      <FourFourFour>
        <ArticleCard
          articleTitle={articleTitle}
          articleCategory={articleCategory}
          imgSrc={imgSrc}
          imgAlt={imgAlt}
        />
      </FourFourFour>
    );
  });
};

export const PopularArticles = () => {
  return (
    <section id="populære artikler">
      <h2 className="mb-56 text-h2 lg:text-h1">Populære artikler</h2>
      <Grid c="mb-56">
        <MapData />
      </Grid>
    </section>
  );
};
