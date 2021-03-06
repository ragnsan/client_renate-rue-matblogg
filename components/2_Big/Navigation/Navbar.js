import { Desktopnav } from "./Desktopnav";
import { Mobilenav } from "./Mobilenav";

export const Navbar = () => {
  return (
    <>
      <nav className="lg:hidden bg-yellow border-b border-1 border-neutral_300">
        <Mobilenav />
      </nav>
      <nav className="hidden lg:flex bg-yellow border-b border-1 border-neutral_300">
        <Desktopnav />
      </nav>
    </>
  );
};
