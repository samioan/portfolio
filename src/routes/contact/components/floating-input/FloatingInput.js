import { useState } from "react";

const FloatingInput = ({
  id,
  type = "text",
  label,
  value,
  onChange,
  required,
}) => {
  const [focused, setFocused] = useState(false);

  const hasText = value && value.length > 0;
  const float = focused || hasText;

  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="
          peer
          w-full
          border-b border-gray-500
          bg-transparent
          text-white
          text-[14px]
          pt-6 pb-2
          focus:outline-none
          focus:border-[#00ADB5]
        "
      />
      <label
        htmlFor={id}
        className={`
          absolute left-0 text-gray-400 pointer-events-none transition-all duration-200
          ${
            float
              ? "text-[12px] -top-0 text-[#00ADB5]"
              : "text-[14px] top-[18px]"
          }
        `}
      >
        {label}
      </label>
    </div>
  );
};

export { FloatingInput };
export default FloatingInput;
