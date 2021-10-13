import {
  FourEightSix,
  FourFourFive,
  Grid,
  Layout,
  Section160,
} from "../../1_Small/Base";
import Image from "next/image";

export const HomeHero = () => {
  return (
    <section id="hero" className="relative mb-56">
      <Image
        src="hvit3_bpacx2.jpg"
        alt=""
        layout="fill"
        className="object-cover dimmer-50"
      />
      <Layout>
        <Grid>
          <FourEightSix c="relative my-56 md:my-80 lg:my-96 text-white">
            <div>
              <h1 className="text-h1 lg:text-display font-bold mb-24">
                Hverdagsmat som funker for alle
              </h1>
              <p className="text-h3 font-semibold">
                Renate er utdannet ernæringsrådgiver og kan lære deg om
                bærekraftig mat, hverdagsmat for travle familier og mat for barn
              </p>
              <div className="pt-56">{arrow_down}</div>
            </div>
          </FourEightSix>
        </Grid>
      </Layout>
    </section>
  );
};

const arrow_down = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="56"
    height="56"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-arrow-down"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <polyline points="19 12 12 19 5 12"></polyline>
  </svg>
);
