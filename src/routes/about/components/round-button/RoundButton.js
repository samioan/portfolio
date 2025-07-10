const RoundButton = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="
      w-[44px] h-[44px]
      flex items-center justify-center
      rounded-full
      bg-[rgba(255,255,255,0.05)]
      text-[#EEEEEE]
      shadow-[0_0_25px_rgba(0,0,0,0.2)]
      transition-all duration-500 ease-in-out
      hover:bg-[rgba(255,255,255,0.05)]
      hover:text-[#00ADB5]
      hover:shadow-[0_5px_35px_rgba(0,0,0,0.2)]
    "
  >
    {icon}
  </a>
);

export { RoundButton };
export default RoundButton;
