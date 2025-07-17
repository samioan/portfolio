import { Link } from "react-router-dom";

const CvButton = () => (
  <Link
    to="/files/Ioannis Siampalias CV.pdf"
    target="_blank"
    download
    className="no-underline"
  >
    <button
      type="button"
      className="
        flex items-center justify-center gap-2
        px-6 h-[44px]
        w-full sm:w-auto
        rounded-[32px]
        text-sm font-bold capitalize
        text-[#eee]
        bg-[#ffffff0d]
        shadow-[0_0_25px_rgba(0,0,0,0.2)]
        transition-all duration-500
        hover:text-[#00ADB5]
        hover:shadow-[0_5px_35px_rgba(0,0,0,0.2)]
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" />
      </svg>
      Download CV
    </button>
  </Link>
);

export { CvButton };
export default CvButton;
