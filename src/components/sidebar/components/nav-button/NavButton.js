import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const NavButton = ({ isTop, title, href, component }) => {
  const [isXl, setIsXl] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsXl(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isTop) {
    return (
      <div className="relative group">
        <div
          className={`absolute z-10 whitespace-nowrap rounded px-2 py-1 text-xs font-medium text-white bg-[#111] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none
            ${
              isXl
                ? "bottom-full mb-2 left-1/2 -translate-x-1/2"
                : "left-full ml-2 top-1/2 -translate-y-1/2"
            }
          `}
        >
          {title}
          <div
            className={`absolute w-2 h-2 bg-[#111] rotate-45
              ${
                isXl
                  ? "top-full left-1/2 -translate-x-1/2"
                  : "left-0 top-1/2 -translate-y-1/2 -ml-1"
              }
            `}
          ></div>
        </div>

        <NavLink
          end
          to={href}
          className={({ isActive }) =>
            `
              p-0
              md:w-full md:h-[28px]
              w-[28px] h-full
              flex items-center justify-center
              transition-colors duration-300 ease-in-out
              ${
                isActive ? "text-[#00ADB5]" : "text-[#a9a9a9] hover:text-[#eee]"
              }
            `
          }
        >
          {component}
        </NavLink>
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        p-0
        md:w-full md:h-[28px]
        w-[28px] h-full
        flex items-center justify-center
        text-[#a9a9a9]
        transition-colors duration-300 ease-in-out
        hover:text-[#eee]
      "
    >
      {component}
    </a>
  );
};

export { NavButton };
export default NavButton;
