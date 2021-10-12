import { FourFourFour, Grid } from "../../1_Small/Base";
import Link from "next/link";

const data = [
  {
    categoryName: "Bærekraftig mat",
    bgColor: "green",
    categoryHref: "baerekraftig-mat",
  },
  { categoryName: "Hverdagsmat", bgColor: "pink", categoryHref: "hverdagsmat" },
  {
    categoryName: "Mat for barn",
    bgColor: "teal",
    categoryHref: "mat-for-barn",
  },
];

const MapData = () => {
  return data.map(({ categoryName, categoryHref }) => {
    return (
      <FourFourFour>
        <Link href={categoryHref} className>
          <a
            className={`bg-${
              categoryName == "Bærekraftig mat"
                ? "green"
                : categoryName == "Hverdagsmat"
                ? "pink"
                : "teal"
            } py-16 flex justify-center items-center rounded-rund shadow-shadow font-semibold hover`}
          >
            {categoryName}
            <span className="ml-16">{arrow_right}</span>{" "}
          </a>
        </Link>
      </FourFourFour>
    );
  });
};

export const ArticleCategories = () => {
  return (
    <section id="article categories" className="mb-56 lg:mb-160">
      <h2 className="mb-56 text-h2 lg:text-h1">Les etter kategori</h2>
      <Grid>
        <MapData />
      </Grid>
    </section>
  );
};

const arrow_right = (
  <svg
    width="15"
    height="16"
    viewBox="0 0 15 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.325 8.03996H0.127441M14.325 8.03996L7.22623 15.1387L14.325 8.03996ZM14.325 8.03996L7.22623 0.941162L14.325 8.03996Z"
      stroke="black"
    />
  </svg>
);
