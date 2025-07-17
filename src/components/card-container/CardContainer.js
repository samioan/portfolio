const CardContainer = ({ children, customClasses }) => (
  <div
    className={`bg-[#393E46] rounded-[18px] transition-all duration-300 ease-in-out hover:scale-[1.025] shadow-[0px_0px_50px_#00000033] hover:shadow-[0px_15px_55px_#0000004D] ${customClasses}`}
  >
    {children}
  </div>
);

export { CardContainer };
export default CardContainer;
