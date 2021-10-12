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
        className="object-cover dimmer-75"
      />
      <Layout>
        <Grid>
          <FourEightSix c="relative my-56 md:my-80 lg:my-96 text-white">
            <div>
              <h1 className="text-h1 lg:text-display font-bold mb-24">
                Hverdagsmat som funker for alle
              </h1>
              <p>
                Renate er utdannet ernæringsrådgiver og kan lære deg om
                bærekraftig mat, hverdagsmat for travle familier og mat for barn
              </p>
              arrow down
            </div>
          </FourEightSix>
        </Grid>
      </Layout>
    </section>
  );
};
