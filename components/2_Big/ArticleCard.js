import { Box, Layout } from "../1_Small/Base";
import Image from "next/image";

const loader = ({ src }) => {
  return `https://images.ctfassets.net/gz5doxqqp280/${src}`;
};

export const ArticleCard = ({
  articleTitle,
  articleCategory,
  imgSrc,
  imgAlt,
}) => {
  return (
    <article className="hover cursor-pointer mb-32 lg:mb-56 hover:underline focus:underline">
      <div className="shadow-shadow rounded-rund relative h-240">
        <Image
          src={imgSrc}
          alt={imgAlt}
          loader={loader}
          layout="fill"
          className="object-cover rounded-rund"
        />
        <div className="flex justify-end mr-16 pt-16">
          <Box c="bg-white relative text-center font-semibold w-120">
            <p className="text-body_small text-neutral_700">
              {articleCategory}
            </p>
          </Box>
        </div>
      </div>
      <h3 className="mt-24 text-neutral_900">{articleTitle}</h3>
    </article>
  );
};
