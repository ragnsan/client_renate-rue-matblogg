import Link from "next/link";
import { useState } from "react";
import { Layout } from "../../1_Small/Base";
import { Turn as Hamburger } from "hamburger-react";

export const Mobilenav = () => {
  const [showMobilenav, setShowMobilenav] = useState(false);
  const openMobilenav = () => {
    setShowMobilenav((prev) => !prev);
  };

  return (
    <>
      {showMobilenav ? (
        <>
          <Layout>
            <div className="py-24 pb-56 ">
              <header className="flex justify-between text-lys align-center">
                <Link href="/">
                  <a className="flex align-center">
                    <p className="text-h3 font-semibold flex mb-0 self-center">
                      Renate Rue
                    </p>
                  </a>
                </Link>
                <div
                  className=""
                  onClick={() => setShowMobilenav(!showMobilenav)}
                >
                  <Hamburger
                    toggled={showMobilenav}
                    toggle={setShowMobilenav}
                    easing="ease-in"
                    rounded
                    label="Vis meny"
                    hideOutline={false}
                  />
                </div>
              </header>
              <ul className="mt-56">
                <Link href="/">
                  <li
                    onClick={() => setShowMobilenav(!showMobilenav)}
                    className="text-h2 font-semibold text-dark mt-24 underline"
                  >
                    Hjem
                  </li>
                </Link>
                <Link href="/baerekraftig-mat">
                  <li className="text-h2 font-semibold text-dark mt-24 underline">
                    Bærekraftig mat
                  </li>
                </Link>
                <Link href="/hverdagsmat">
                  <li className="text-h2 font-semibold text-dark mt-24 underline">
                    Hverdagsmat
                  </li>
                </Link>
                <Link href="/mat-for-barn">
                  <li className="text-h2 font-semibold text-dark mt-24 underline">
                    Mat for barn
                  </li>
                </Link>
                <Link href="om-renate">
                  <li className="text-h2 font-semibold text-dark mt-24 underline">
                    Om renate
                  </li>
                </Link>
              </ul>
            </div>
          </Layout>
        </>
      ) : (
        <Layout>
          <div className="flex justify-between align-center py-24">
            <Link href="/">
              <a className="flex align-center">
                <p className="text-h3 font-semibold flex mb-0 self-center">
                  Renate Rue
                </p>
              </a>
            </Link>
            <div
              className="strek flex self-center hamburgerTransition"
              onClick={() => setShowMobilenav(!showMobilenav)}
            >
              <Hamburger
                toggled={showMobilenav}
                toggle={setShowMobilenav}
                easing="ease-in"
                rounded
                label="Vis meny"
                hideOutline={false}
              />
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};
