// const openFacebook = () => {
//   window.open(
//     'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href), 'facebook-share-dialog', 'width=626,height=436'

import { FacebookIcon, FacebookShareButton } from "react-share";

// }

export const BlogSocialSharing = ({ category, blog }) => {
  console.log(blog);
  const categoryName = category;
  return (
    <div className="flex flex-col md:flex-row mb-56">
      <FacebookShareButton
      // url={`https://renaterue.no/${category}/${blog.slug}`}
      >
        <div className="py-16 px-24 flex bg-white rounded-rund items-center mr-24 mb-24 md:mb-0 w-100 md:w-auto justify-center cursor-pointer shadow-shadow hover">
          <a className="mr-16 font-semibold text-neutral_700 noUnderline ">
            Del på Facebook
          </a>{" "}
          <FacebookIcon size={32} round={true} />
        </div>
      </FacebookShareButton>
    </div>
  );
};
