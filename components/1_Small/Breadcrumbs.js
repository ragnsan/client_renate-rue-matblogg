import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// import "./styles.module.css";

const chevron = (
  <svg
    className=""
    width="12"
    height="12"
    viewBox="0 0 49 49"
    fill="none"
    className="transform -rotate-90  flex self-center"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.11775 23.2548L24.7452 45.8822L47.3726 23.2548"
      stroke="#B9455C"
      strokeWidth="6"
    />
  </svg>
);

const convertBreadcrumb = (string) => {
  return (
    // string.charAt(0).toUpperCase() +
    string
      .toUpperCase()
      .replace(/-/g, " ")
      .replace(/oe/g, "ö")
      .replace(/ae/g, "ä")
      .replace(/ue/g, "ü")
  );
};

export const Breadcrumbs = ({ kategori }) => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split("/");
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: "/" + linkPath.slice(0, i + 1).join("/"),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  let categoryHref = "";
  if (kategori == "Bærekraftig mat") {
    categoryHref = "baerekraftig-mat";
  } else if (kategori == "Hverdagsmat") {
    categoryHref = "hverdagsmat";
  } else {
    categoryHref = "mat-for-barn";
  }

  return (
    <nav aria-label="breadcrumbs">
      <div className="mr-12 hover:text-ctaVar hover:underline focus:text-ctaVar focus:underline flex mb-16">
        <Link href={`/${categoryHref}`}>
          <a className="flex text-red font-bold mr-8">
            Gå tilbake til {kategori}
          </a>
        </Link>
        {chevron}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
