import { ReactComponent as MenuIcon } from "images/menuIcon.svg";
import { ReactComponent as CloseIcon } from "images/closeIcon.svg";

const NavMenu = ({ isMenuOpen, handleClick }) => (
  <button
    type="button"
    onClick={handleClick}
    className="
      rounded-none
      flex items-center justify-center
      transition-all duration-300 ease-in-out
      hover:bg-black/10
      focus:bg-[#202020]
      outline-none
      w-[58px]
      h-full
      text-[#a9a9a9]
      bg-[#202020]
    "
  >
    {isMenuOpen ? <MenuIcon /> : <CloseIcon />}
  </button>
);

export { NavMenu };
export default NavMenu;
