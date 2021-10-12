import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Link from "next/link";
import Image from "next/image";
//
// Loader for bruke av contentful-bilder, siden loader i next.config.js brukes til cloudinary-bilder
// //
const loader = ({ src, width }) => {
  return `https://images.ctfassets.net/gz5doxqqp280/${src}?w=${width}`;
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
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-24">{children}</p>,
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
        <a
          target="blank"
          className="text-cta underline-blogg hover:underline focus:underline hover:text-ctaVar mb-24"
        >
          {children}
        </a>
      </Link>
    ),
  },
};
