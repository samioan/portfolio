const Title = ({ label }) => (
  <h1 className="absolute overflow-hidden left-0 md:top-[50px] sm:top-[40px] xs:top-[30px] w-full md:text-[120px] text-[60px] sm:leading-[120px] xs:leading-[140px] tracking-[.04em] whitespace-nowrap uppercase text-center text-[#EEEEEE] font-bold opacity-[0.05] md:pl-[44px] xs:pl-0">
    {label}
  </h1>
);

export { Title };
export default Title;
