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

export const PopularArticles = ({ blog, sectionHeading }) => {
  console.log(blog);
  const MapData = () => {
    return blog.map(() => {
      return (
        <FourFourFour>
          <ArticleCard
            articleTitle={blog.fields}
            articleCategory={"Bærekraftig mat"}
            imgSrc={blog.fields.hovedbilde.fields.file.url.slice(36)}
            imgAlt={fields.hovedbilde.fields.description}
          />
        </FourFourFour>
      );
    });
  };
  return (
    <section id="populære artikler">
      <h2 className="mb-56 text-h2 lg:text-h1">{sectionHeading}</h2>
      <Grid c="mb-56">
        <MapData />
      </Grid>
    </section>
  );
};
