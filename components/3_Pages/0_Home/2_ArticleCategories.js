import { FourFourFour, Grid } from "../../1_Small/Base";
import Link from "next/link";

export const ArticleCategories = () => {
  return (
    <section id="article categories" className="mb-56 lg:mb-160">
      <h2 className="mb-56 text-h2 lg:text-h1">Les etter kategori</h2>
      <Grid>
        <FourFourFour className="group">
          <Link href="/baerekraftig-mat" className>
            <a
              style={{ background: "#C6EBC9" }}
              className={` py-16 flex justify-center items-center rounded-rund shadow-shadow font-semibold hover noUnderline`}
            >
              Bærekraftig mat
              <span className="ml-16 group-hover:ml-24">
                {arrow_right}
              </span>{" "}
            </a>
          </Link>
        </FourFourFour>
        <FourFourFour className="group">
          <Link href="/hverdagsmat" className>
            <a
              style={{ background: "#F5C6D7" }}
              className={` py-16 flex justify-center items-center rounded-rund shadow-shadow font-semibold hover noUnderline`}
            >
              Hverdagsmat
              <span className="ml-16 group-hover:ml-24">
                {arrow_right}
              </span>{" "}
            </a>
          </Link>
        </FourFourFour>
        <FourFourFour className="group">
          <Link href="/mat-for-barn" className>
            <a
              style={{ background: "#A6EDF0" }}
              className={` py-16 flex justify-center items-center rounded-rund shadow-shadow font-semibold hover noUnderline`}
            >
              Mat for barn
              <span className="ml-16 group-hover:ml-24">
                {arrow_right}
              </span>{" "}
            </a>
          </Link>
        </FourFourFour>
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
