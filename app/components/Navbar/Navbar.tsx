import React from "react";
import Logo from "../Logo/Logo";
import { Container } from "@/app/UI";
import { navbarButtons } from "@/data";
import SocialIcons from "../SocialIcons/SocialIcons";
import DarkMode from "../DarkMode/DarkMode";
import NavButtons from "../NavButtons/NavButtons";
import SlideMenu from "../SlideMenu/SlideMenu";

function Navbar() {
  return (
    <nav className="backdrop-blur-md bg-[#ffffff8b] dark:bg-[#0f172a8b] z-50 w-full h-[56px] text-gray-700 dark:text-gray-200 relative">
      <Container className="flex items-center justify-between">
        <Logo
          className="hidden lg:flex"
          width={48}
          height={48}
          includeTitle
          href="/"
        />
        <Logo className="lg:hidden" width={48} height={48} href="/" />
        <NavButtons className="hidden md:flex" buttons={navbarButtons} />
        <div className="flex items-center gap-6">
          <SocialIcons className="hidden md:flex" />
          <DarkMode />
          <SlideMenu title="The Menu" className="md:hidden">
            <div className="flex flex-col justify-between">
              <NavButtons className="flex-col w-full" buttons={navbarButtons} />
              <SocialIcons className="gap-4 p-2" />
            </div>
          </SlideMenu>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
