import { Desktopnav } from "./Desktopnav";
import { Mobilenav } from "./Mobilenav";

export const NavbarWhite = () => {
  return (
    <>
      <nav className="lg:hidden bg-white border-b border-1 border-neutral_300">
        <Mobilenav />
      </nav>
      <nav className="hidden lg:flex bg-white border-b border-1 border-neutral_300">
        <Desktopnav />
      </nav>
    </>
  );
};
