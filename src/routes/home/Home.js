import { useEffect } from "react";

import { homeImg } from "images";

import Typewriter from "typewriter-effect";

const Home = () => {
  useEffect(() => {
    document.title = "Ioannis Siampalias";
  }, []);

  return (
    <div
      className="
        flex 
        flex-col 
        items-center 
        justify-center 
        h-screen 
        before:content-[''] 
        before:fixed 
        before:left-0 
        before:right-0 
        before:top-0 
        before:bottom-0 
        before:w-auto 
        before:h-auto 
        before:overflow-hidden 
        before:opacity-[0.6]
        before:bg-[#000]"
      style={{ background: `url(${homeImg})`, backgroundSize: "cover" }}
    >
      <div className="z-[1]">
        <h1 className="text-center text-[#EEEEEE] font-[600] text-shadow-lg tracking-[-.035em] mb-[8px] sm:text-[66px] text-[46px] leading-[1.167]">
          <span className="opacity-50">Ioannis</span> Siampalias
        </h1>
        <div className="flex items-center justify-center">
          <p className="text-[#a9a9a9] sm:text-[20px] text-[18px] mr-[8px] text-shadow-lg">
            I am a
          </p>
          <Typewriter
            options={{
              strings: [
                "frontend engineer",
                "game developer",
                "musician",
                "freelancer",
              ],
              autoStart: true,
              loop: true,
              wrapperClassName:
                "text-[#eee] font-bold text-[20px] text-shadow-lg max-[560px]:text-[18px]",
              cursorClassName:
                "text-[#a9a9a9] text-[20px] text-shadow-lg max-[560px]:text-[18px]",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export { Home };
export default Home;
