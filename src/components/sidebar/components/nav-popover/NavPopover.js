import { useEffect, useState } from "react";

const NavPopover = ({ children, open, anchorEl, onClose }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (open && anchorEl) {
      const rect = anchorEl.getBoundingClientRect();
      setPosition({
        top: rect.bottom,
        left: rect.left,
      });

      requestAnimationFrame(() => setShow(true));
    } else {
      setShow(false);
    }
  }, [open, anchorEl]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (anchorEl && !anchorEl.contains(e.target)) {
        onClose?.();
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, anchorEl, onClose]);

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: position.top,
        left: 0,
        width: "100vw",
        zIndex: 50,
      }}
      className={`
        transition-opacity duration-300
        ${show ? "opacity-100" : "opacity-0"}
      `}
    >
      <div
        className="
          flex justify-center items-center
          h-[58px] gap-[16px]
          bg-[#202020] w-full
          rounded-none shadow-none
        "
      >
        {children}
      </div>
    </div>
  );
};

export { NavPopover };
export default NavPopover;
