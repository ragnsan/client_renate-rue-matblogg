import { FourFourFour, Grid } from "../../1_Small/Base";
import { ArticleCard } from "../../2_Big/ArticleCard";

export const PopularArticles = ({
  brekraftigMat,
  hverdagsmat,
  matForBarn,
  sectionHeading,
}) => {
  const MapBrekraftigMat = () => {
    return brekraftigMat.map((brekraftigMat) => {
      return (
        <FourFourFour c="" id={brekraftigMat.sys.id}>
          <ArticleCard
            aricleHref={`baerekraftig-mat/${brekraftigMat.fields.slug}`}
            articleTitle={brekraftigMat.fields.overskrift}
            articleCategory={"Bærekraftig mat"}
            imgSrc={brekraftigMat.fields.hovedbilde.fields.file.url.slice(36)}
            imgAlt={brekraftigMat.fields.hovedbilde.fields.description}
          />
        </FourFourFour>
      );
    });
  };
  const MapHverdagsmat = () => {
    return hverdagsmat.map((hverdagsmat) => {
      return (
        <FourFourFour c="">
          <ArticleCard
            key={hverdagsmat.sys.id}
            aricleHref={`hverdagsmat/${hverdagsmat.fields.slug}`}
            articleTitle={hverdagsmat.fields.overskrift}
            articleCategory={"Hverdagsmat"}
            imgSrc={hverdagsmat.fields.hovedbilde.fields.file.url.slice(36)}
            imgAlt={hverdagsmat.fields.hovedbilde.fields.description}
          />
        </FourFourFour>
      );
    });
  };
  const MapMatForBarn = () => {
    return matForBarn.map((matForBarn) => {
      return (
        <FourFourFour c="" id={matForBarn.sys.id}>
          <ArticleCard
            aricleHref={`mat-for-barn/${matForBarn.fields.slug}`}
            articleTitle={matForBarn.fields.overskrift}
            articleCategory={"Mat for barn"}
            imgSrc={matForBarn.fields.hovedbilde.fields.file.url.slice(36)}
            imgAlt={matForBarn.fields.hovedbilde.fields.description}
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
        {brekraftigMat != null ? <MapBrekraftigMat /> : <></>}
        {hverdagsmat != null ? <MapHverdagsmat /> : <></>}
        {matForBarn != null ? <MapMatForBarn /> : <></>}
      </Grid>
    </section>
  );
};
