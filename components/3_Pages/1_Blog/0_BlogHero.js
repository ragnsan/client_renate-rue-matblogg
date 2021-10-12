import { AuthorBio } from "../../1_Small/AuthorBio";
import Image from "next/image";
import {
  FourEightSix,
  FourSixSix,
  Grid,
  Layout,
  Section160,
} from "../../1_Small/Base";
const loader = ({ src, width }) => {
  return `https://images.ctfassets.net/gz5doxqqp280/${src}?w=${width}`;
};

export const BlogHero = ({ heading, blog }) => {
  return (
    <>
      <h1 className="mb-32 ">{blog.overskrift}</h1>
      <AuthorBio
        authorImgAlt={blog.person.fields.profilbilde.fields.description}
        authorImgUrl={blog.person.fields.profilbilde.fields.file.url.slice(36)}
        authorName={blog.person.fields.name}
        publishDate={blog.dato}
      />
      <div className="py-24 lg:pt-56 lg:pb-0">
        <Image
          src={blog.hovedbilde.fields.file.url.slice(36)}
          loader={loader}
          alt={blog.hovedbilde.fields.description}
          width={blog.hovedbilde.fields.file.details.image.width}
          height={blog.hovedbilde.fields.file.details.image.height}
          className="object-cover rounded-rund"
          layout="responsive"
        />
      </div>
    </>
  );
};
