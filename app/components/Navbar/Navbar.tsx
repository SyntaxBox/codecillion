import React from "react";
import Logo from "../Logo/Logo";
import Container from "../../UI/layout/Container";
import { navbarButtons } from "@/data/elements/navbar";
import SocialIcons from "../SocialIcons/SocialIcons";
import Owner from "../Owner/Owner";
import DarkMode from "../DarkMode/DarkMode";
import NavButtons from "../NavButtons/NavButtons";
import SlideMenu from "../SlideMenu/SlideMenu";
import { IconUser } from "@tabler/icons-react";

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
          <Owner className="hidden lg:flex" />
          <Owner className="hidden md:flex lg:hidden " excludeTitle />
          <SocialIcons className="hidden md:flex" />
          <DarkMode />
          <SlideMenu title="The Menu" className="md:hidden">
            <div className="flex flex-col justify-between">
              <NavButtons
                className="flex-col w-full"
                buttons={[
                  ...navbarButtons,
                  {
                    href: "owner",
                    title: "Owner",
                    Icon: IconUser,
                  },
                ]}
              />
              <SocialIcons className="gap-4 p-2" />
            </div>
          </SlideMenu>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
