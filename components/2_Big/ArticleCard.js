import { Box, Layout } from "../1_Small/Base";
import Image from "next/image";
import Link from "next/link";

const loader = ({ src }) => {
  return `https://images.ctfassets.net/gz5doxqqp280/${src}?w=750`;
};

export const ArticleCard = ({
  articleTitle,
  articleCategory,
  aricleHref,
  imgSrc,
  imgAlt,
  key,
}) => {
  return (
    <article className="hover cursor-pointer mb-32 lg:mb-56 group" key={key}>
      <Link href={`/${aricleHref}`}>
        <a>
          <div className="shadow-shadow rounded-rund relative h-240">
            <Image
              src={imgSrc}
              alt={imgAlt}
              loader={loader}
              layout="fill"
              className="object-cover rounded-rund"
            />
            <div className="flex justify-end mr-16 pt-16 ">
              <Box c="bg-white relative text-center font-semibold ">
                <p className="text-body_small text-neutral_700 px-24 ">
                  {articleCategory}
                </p>
              </Box>
            </div>
          </div>
          <h3 className="mt-24 text-neutral_900 group-hover:underline group-focus:underline ">
            {articleTitle}
          </h3>
        </a>
      </Link>
    </article>
  );
};
