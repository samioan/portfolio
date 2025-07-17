import withSidebar from "./withSidebar";
import { Logo, NavButton, NavPopover, NavMenu } from "./components";

const Sidebar = ({
  topSidebarButtons,
  bottomSidebarButtons,
  isXl,
  open,
  anchorEl,
  handleClick,
}) => {
  return (
    <div
      className="
        flex 
        fixed 
        left-0 
        md:pb-[16px]
        pb-0
        justify-between 
        md:bottom-0 
        bottom-[calc(100%-58px)] 
        md:w-[44px] 
        w-full 
        md:flex-col
        flex-row 
        md:h-full 
        h-[58px]
        bg-[#181818]
        before:content-['']
        before:absolute
        before:-right-[1px]
        before:top-0
        before:md:w-[1px]
        before:w-0
        before:md:h-full
        before:h-0
        before:bg-[white]
        before:opacity-[0.05]"
    >
      <div className="flex items-center gap-[16px] md:w-full w-auto flex-wrap justify-center">
        <Logo />
        {!isXl &&
          topSidebarButtons.map(({ title, component, href }) => (
            <NavButton
              key={title}
              isTop
              title={title}
              component={component}
              href={href}
            />
          ))}
      </div>
      <div className="flex flex-wrap items-center gap-[16px] md:w-full w-auto">
        {bottomSidebarButtons.map(({ title, component, href }) => (
          <NavButton
            key={title}
            title={title}
            component={component}
            href={href}
          />
        ))}
        {isXl && <NavMenu isMenuOpen={open} handleClick={handleClick} />}
      </div>
      <NavPopover open={open} anchorEl={anchorEl} onClose={handleClick}>
        {topSidebarButtons.map(({ title, component, href }) => (
          <NavButton
            key={title}
            isTop
            title={title}
            component={component}
            href={href}
          />
        ))}
      </NavPopover>
    </div>
  );
};

export { Sidebar };
export default withSidebar(Sidebar);
