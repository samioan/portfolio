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
    {isMenuOpen ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-[32px] h-[32px]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-[32px] h-[32px]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
        />
      </svg>
    )}
  </button>
);

export { NavMenu };
export default NavMenu;
