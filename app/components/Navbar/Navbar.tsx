import React from "react";
import Logo from "../Logo/Logo";
import Container from "../../UI/layout/Container";
import { navbarButtons } from "@/data/elements/navbar";
import SocialIcons from "../SocialIcons/SocialIcons";
import Owner from "../Owner/Owner";
import DarkMode from "../DarkMode/DarkMode";
import NavButtons from "../NavButtons/NavButtons";

function Navbar() {
  return (
    <nav className="bg-slate-100 dark:bg-slate-900 z-50 w-full h-[64px] text-gray-700 dark:text-gray-200 border-b border-slate-200 dark:border-slate-700">
      <Container className="flex items-center justify-between">
        <Logo width={48} height={48} includeTitle href="/" />
        <NavButtons buttons={navbarButtons} />
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
