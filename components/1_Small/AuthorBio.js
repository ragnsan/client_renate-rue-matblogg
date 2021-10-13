import Image from "next/image";
import { FormatterDato } from "./FormatterDato";

const loader = ({ src, width }) => {
  return `https://images.ctfassets.net/gz5doxqqp280/${src}?w=64`;
};

export const AuthorBio = ({
  authorName,
  publishDate,
  authorImgUrl,
  authorImgAlt,
}) => {
  return (
    <>
      <div className="flex">
        <div className="mr-12 w-32 h-32 relative">
          <Image
            src={authorImgUrl}
            alt={authorImgAlt}
            loader={loader}
            layout="fill"
            className="object-cover circle"
          />
        </div>
        <div className="flex">
          <p className="mr-4 text-neutral_700">{authorName}, </p>
          <p className=" text-neutral_700">
            <FormatterDato dato={publishDate} />
          </p>
        </div>
      </div>
    </>
  );
};
