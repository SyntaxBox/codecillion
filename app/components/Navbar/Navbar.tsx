import React from "react";
import Logo from "../Logo/Logo";
import Container from "../../UI/layout/Container";
import NavButton from "@/app/UI/buttons/NavButton";
import { navbarButtons } from "@/data/elements/navbar";
import SocialIcons from "../SocialIcons/SocialIcons";
import Owner from "../Owner/Owner";
import DarkMode from "../DarkMode/DarkMode";

function Navbar() {
  return (
    <nav className="w-full h-[64px] text-gray-700 dark:text-gray-200 border-b border-slate-200 dark:border-slate-700 shadow-2xl shadow-slate-100 dark:shadow-slate-800">
      <Container className="flex items-center justify-between">
        <Logo width={48} height={48} includeTitle href="/" />
        <div className="flex gap-1">
          {navbarButtons.map((e, i) => {
            const { href, title, Icon } = e;
            return (
              <NavButton href={href} key={i} active={i === 2}>
                <div className="flex gap-3">
                  <Icon stroke={1.2} />
                  <span>{title}</span>
                </div>
              </NavButton>
            );
          })}
        </div>
        <div className="flex gap-6">
          <Owner />
          <SocialIcons />
          <DarkMode />
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
