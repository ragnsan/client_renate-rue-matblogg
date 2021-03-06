import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Link from "next/link";
import Image from "next/image";
//
// Loader for bruke av contentful-bilder, siden loader i next.config.js brukes til cloudinary-bilder
// //
const loader = ({ src, width }) => {
  return `https://images.ctfassets.net/gz5doxqqp280/${src}?w=900`;
};

export const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      // Finn ut av håndtering av spacing rundt bilde -> Prøv React.Fragment
      <div className="mb-24">
        <Image
          className="mb-24 rounded-rund"
          loader={loader}
          src={`${node.data.target.fields.file.url.slice(36)}`}
          width={node.data.target.fields.file.details.image.width}
          height={node.data.target.fields.file.details.image.height}
          alt={node.data.target.fields.description}
        />
      </div>
    ),
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => (
      <div>
        <div className="border-b-2 flex justify-between p-8">
          {node.data.target.fields.tabell.tableData[0].map((overskrift) => {
            return (
              <div className="font-bold flex flex-1 justify-center">
                {overskrift}
              </div>
            );
          })}
        </div>
        {node.data.target.fields.tabell.tableData.slice(1).map((innhold) => {
          return (
            <div className="border-b-2 flex justify-between p-8">
              {innhold.map((element) => {
                return (
                  <div className="flex flex-1 justify-center text-light">
                    {element}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="text-h2 text-dark lg:text-big font-semibold mb-8">
        {children}
      </h1>
    ),
    // Akkurat nå er det h2 som regulerer spacing mellom avsnittene/seksjonene
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 id={children} className="mb-24 mt-56">
        {children}
      </h2>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="mb-24 text-neutral_900">{children}</p>
    ),
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="mb-24 bg-white rounded-rund pl-16  pb-8 pt-16 border-l-8 overflow-hidden border-red">
        <div className="w-80 pl-16 absolute">{quote}</div>
        <div className="px-32 pt-24">{children}</div>
      </blockquote>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc pb-16 text-body_regular">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal pb-16 text-body_regular">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="-mb-24 text-blogg ml-16 lg:ml-32 my-8">{children}</li>
    ),
    [INLINES.HYPERLINK]: ({ data }, children) => (
      <Link href={`${data.uri}`}>
        <a target="blank" className="text-red font-bold underline mr-4 mb-24">
          {" "}
          {children}
        </a>
      </Link>
    ),
  },
};

const quote = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    x="0px"
    y="0px"
    style={{ opacity: "0.15" }}
    viewBox="0 0 100 125"
    enable-background="new 0 0 100 100"
    xmlSpace="preserve"
  >
    <path d="M75.497,87.588C86.268,87.588,95,78.855,95,68.084c0-10.771-8.732-19.502-19.503-19.502c-0.232,0-6.279,0.034-6.279,0.034  c0.153-10.869,7.646-19.99,17.738-22.613c0.679-0.176,2.102-0.471,2.123-0.473C92.4,25.204,95,22.402,95,18.992  c0-3.288-2.422-6.003-5.574-6.485c-0.033-0.006-0.066-0.008-0.099-0.016c-0.151-0.02-0.304-0.035-0.458-0.045  c-0.074-0.004-0.145-0.021-0.22-0.021c0,0-0.789-0.025-1.05-0.004c-1.165,0.098-1.529,0.246-2.281,0.404  C68.7,16.315,56.162,31.012,56.003,48.616h-0.01v19.556l0.005-0.004C56.043,78.9,64.753,87.588,75.497,87.588z" />
    <path d="M5.005,68.168c0.045,10.732,8.756,19.42,19.499,19.42c10.771,0,19.503-8.732,19.503-19.504  c0-10.771-8.732-19.502-19.503-19.502c-0.231,0-6.278,0.034-6.278,0.034c0.152-10.869,7.646-19.99,17.737-22.613  c0.68-0.176,2.103-0.471,2.123-0.473c3.321-0.326,5.921-3.128,5.921-6.538c0-3.288-2.422-6.003-5.574-6.485  c-0.032-0.006-0.065-0.008-0.099-0.016c-0.15-0.02-0.303-0.035-0.457-0.045c-0.074-0.004-0.145-0.021-0.221-0.021  c0,0-0.788-0.025-1.049-0.004c-1.166,0.098-1.53,0.246-2.282,0.404C17.707,16.315,5.169,31.012,5.01,48.616H5v19.556L5.005,68.168z" />
    <text
      x="0"
      y="115"
      fill="#ECECEC"
      fontSize="5px"
      fontWeight="bold"
      fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
    >
      Created by TMD
    </text>
    <text
      x="0"
      y="120"
      fill="#ECECEC"
      fontSize="5px"
      fontWeight="bold"
      fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
    >
      from the Noun Project
    </text>
  </svg>
);
