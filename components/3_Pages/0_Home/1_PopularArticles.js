import { FourFourFour, Grid } from "../../1_Small/Base";
import { ArticleCard } from "../../2_Big/ArticleCard";

export const PopularArticles = ({ blog, sectionHeading }) => {
  const MapData = () => {
    return blog.map((blog) => {
      return (
        <FourFourFour c="">
          <ArticleCard
            aricleHref={`/${blog.fields.slug}`}
            articleTitle={blog.fields.overskrift}
            articleCategory={"Bærekraftig mat"}
            imgSrc={blog.fields.hovedbilde.fields.file.url.slice(36)}
            imgAlt={blog.fields.hovedbilde.fields.description}
          />
        </FourFourFour>
      );
    });
  };
  return (
    <section id="populære artikler">
      <h2 className="pb-56 pt-56 lg:pt-80 text-h2 lg:text-h1">
        {sectionHeading}
      </h2>
      <Grid c="pb-56">
        <MapData />
      </Grid>
    </section>
  );
};
