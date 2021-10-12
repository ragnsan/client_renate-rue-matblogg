import Link from "next/link";
import { Layout } from "../../1_Small/Base";

export const Desktopnav = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-between my-24">
        <div className="self-center ">
          <Link href="/">
            <a>
              <p className="text-h3 font-semibold flex mb-24">RR</p>
            </a>
          </Link>
        </div>
        <div className="text-label text-dark font-medium flex self-center">
          <Link href="/">
            <a className="mb-0 ">Hjem</a>
          </Link>
          <Link href="/baerekraftig-mat">
            <a className="ml-32 mb-0 ">Bærekraftig mat</a>
          </Link>
          <Link href="/hverdagsmat">
            <a className="ml-32 mb-0 ">Hverdagsmat</a>
          </Link>
          <Link href="/mat-for-barn">
            <a className="ml-32 mb-0 ">Mat for barn</a>
          </Link>
          <Link href="/om-renate">
            <a className="ml-32 mb-0 ">Om Renate</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};
