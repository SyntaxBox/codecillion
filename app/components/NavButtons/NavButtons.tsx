import { NavButton } from "@/app/UI";
import { NavbarButton } from "@/interfaces";
import { cn } from "@/utils";
import React from "react";

function NavButtons({
  buttons,
  activeIndex,
  excludeIcons,
  className,
}: {
  buttons: NavbarButton[] | undefined;
  activeIndex?: number;
  excludeIcons?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex gap-1 ", className)}>
      {buttons &&
        buttons.map(({ href, title, Icon }, i) => {
          return (
            <NavButton href={href} key={i} active={i === activeIndex}>
              <div
                className={cn("flex gap-3", excludeIcons ? "uppercase" : "")}
              >
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
