export const BlogSocialSharing = () => {
  return (
    <div className="flex flex-col md:flex-row mb-56">
      <div className="py-16 px-24 flex bg-red rounded-rund items-center mr-24 mb-24 md:mb-0 w-100 md:w-auto justify-center">
        <a className="mr-8 font-semibold text-white">Del på Instagram</a>{" "}
        {instagram}
      </div>
      <div className="py-16 px-24 flex bg-red rounded-rund items-center justify-center">
        <a className="mr-8 font-semibold text-white">Del på Facebook</a>{" "}
        {instagram}
      </div>
    </div>
  );
};

const facebook = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-instagram"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
const instagram = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-instagram"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
