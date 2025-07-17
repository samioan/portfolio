const Subtitle = ({ label, customClasses }) => (
  <p
    className={`text-[#EEEEEE] text-[20px] leading-[28px] font-bold sm:text-left text-center ${customClasses}`}
  >
    <span className="text-[#00ADB5]">{label.split(" ")[0]}</span>
    {` ${label.split(" ")[1]}`}
  </p>
);

export { Subtitle };
export default Subtitle;
