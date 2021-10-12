import { options } from "../../components/1_Small/ContentfulOptions";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const BlogReferences = ({ blog }) => {
  return (
    <section id="referanser" className="pt-16 border-t border-neutral_300">
      <h2 className="mb-16">Referanser</h2>
      {documentToReactComponents(blog.referanser, options)}
    </section>
  );
};
