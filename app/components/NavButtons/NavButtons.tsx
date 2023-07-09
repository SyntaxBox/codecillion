import NavButton from "@/app/UI/buttons/NavButton";
import { NavbarButton } from "@/interfaces/navbar";
import React from "react";

function NavButtons({
  buttons,
  activeIndex,
  excludeIcons,
}: {
  buttons: NavbarButton[];
  activeIndex?: number;
  excludeIcons?: boolean;
}) {
  return (
    <div className="flex gap-1">
      {buttons.map(({ href, title, Icon }, i) => {
        return (
          <NavButton href={href} key={i} active={i === activeIndex}>
            <div className={`flex gap-3 ${excludeIcons ? "uppercase" : ""}`}>
              {!excludeIcons && <Icon stroke={1.2} />}
              <span>{title}</span>
            </div>
          </NavButton>
        );
      })}
    </div>
  );
}

export default NavButtons;
