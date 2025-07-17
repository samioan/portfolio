import { NavLink } from "react-router-dom";
import { logoIcon } from "images";

const Logo = () => (
  <div
    className="bg-[#00ADB5] 
      flex 
      relative
      items-center 
      justify-center 
      h-[58px] 
      md:w-[100%] 
      w-[58px] 
      before:content-[''] 
      before:absolute 
      before:left-0 
      before:top-0 
      before:w-full 
      before:h-full 
      before:bg-[black]
      before:opacity-[0.3]
      before:pointer-events-none
      before:z-[0]"
  >
    <button
      type="button"
      className="z-[1] flex items-center justify-center p-2 rounded-full focus:outline-none"
    >
      <NavLink
        end
        to="/"
        className="h-inherit w-inherit text-[#EEE] flex items-center justify-center"
      >
        <img src={logoIcon} alt="Logo" className="w-[24px] h-[24px]" />
      </NavLink>
    </button>
  </div>
);

export { Logo };
export default Logo;
