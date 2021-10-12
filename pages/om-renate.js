import { FourEightFive, Grid, Layout } from "../components/1_Small/Base";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "../components/1_Small/ContentfulOptions";
import { Navbar } from "../components/2_Big/Navigation/Navbar";
import { Footer } from "../components/2_Big/Navigation/Footer";

//
// Hente access token og space token fra .env.local
//
let client = require("contentful").createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});
//
// Hent data fra CMS, og hvis det ikke går, redirect til homepage
//
export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: "omRenate",
    // "fields.slug": params.slug,
  });
  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        seksjon1: data.items[1].fields,
        seksjon2: data.items[0].fields,
      },
      revalidate: 60,
    };
  }
}

const loader = ({ src, width }) => {
  return `https://images.ctfassets.net/gz5doxqqp280/${src}?w=${width}`;
};

export default function omRenate({ seksjon1, seksjon2 }) {
  if (!seksjon1 || !seksjon2) {
    return <div>{RedirectPage()}</div>;
  }
  console.log(seksjon1);
  console.log(seksjon2);
  return (
    <>
      <Navbar />
      <Layout>
        <Grid c="mb-96 lg:mb-160 mt-56 lg:mt-96">
          <FourEightFive c="">
            <section id="om-renate" className="mb-32 lg:mb-0">
              <h2 className="mb-32">{seksjon1.overskrift}</h2>
              {documentToReactComponents(seksjon1.innhold, options)}
            </section>
            <div className="rounded-rund lg:hidden">
              <Image
                src={seksjon1.seksjonsBilde.fields.file.url.slice(36)}
                alt={seksjon1.seksjonsBilde.fields.description}
                loader={loader}
                layout="responsive"
                width={seksjon1.seksjonsBilde.fields.file.details.image.width}
                height={seksjon1.seksjonsBilde.fields.file.details.image.height}
                className="object-cover rounded-rund"
              />
            </div>
          </FourEightFive>
          <FourEightFive c="relative lg:col-start-7 hidden lg:block">
            <Image
              src={seksjon1.seksjonsBilde.fields.file.url.slice(36)}
              alt={seksjon1.seksjonsBilde.fields.description}
              loader={loader}
              layout="fill"
              className="object-cover rounded-rund"
            />
          </FourEightFive>
        </Grid>
        <Grid c="mb-96 lg:mb-160">
          <FourEightFive c="relative hidden lg:block">
            <Image
              src={seksjon2.seksjonsBilde.fields.file.url.slice(36)}
              alt={seksjon2.seksjonsBilde.fields.description}
              loader={loader}
              layout="fill"
              className="object-cover rounded-rund"
            />
          </FourEightFive>
          <FourEightFive c="lg:col-start-7">
            <section id="om-renate" className="mb-32 lg:mb-0">
              <h2 className="mb-32">{seksjon2.overskrift}</h2>
              {documentToReactComponents(seksjon2.innhold, options)}
            </section>
            <div className="rounded-rund lg:hidden">
              <Image
                src={seksjon2.seksjonsBilde.fields.file.url.slice(36)}
                alt={seksjon2.seksjonsBilde.fields.description}
                loader={loader}
                layout="responsive"
                width={seksjon2.seksjonsBilde.fields.file.details.image.width}
                height={seksjon2.seksjonsBilde.fields.file.details.image.height}
                className="object-cover rounded-rund"
              />
            </div>
          </FourEightFive>
        </Grid>
      </Layout>
      <Footer />
    </>
  );
}
