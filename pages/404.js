import Link from "next/link";
import {
  FourEightSix,
  FourEightTwelve,
  Grid,
  Layout,
} from "../components/1_Small/Base";
import { Footer } from "../components/2_Big/Navigation/Footer";
import { Navbar } from "../components/2_Big/Navigation/Navbar";

export const Feil = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Grid>
          <FourEightSix c="lg:col-start-4">
            <section id="main-content" className="py-56 md:py-96 lg:py-160">
              <h1 className="mb-16">Woops!</h1>
              <h2 className="mb-32">
                Denne siden ser ikke ut til å funke. Vennligst bruk menyen over
                til å gå til en gyldig side.
              </h2>
              <Link href="/">
                <a className="py-16 px-24 bg-red text-white font-bold text-center rounded-rund">
                  Gå tilbake til hjemmesiden
                </a>
              </Link>
            </section>
          </FourEightSix>
        </Grid>
      </Layout>
      <Footer />
    </>
  );
};

export default Feil;
