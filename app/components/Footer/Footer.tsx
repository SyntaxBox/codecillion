import React from "react";
import { navbarButtons } from "@/data";
import { Container, A } from "@/app/UI";
import { TITLE } from "@/constants";
import Logo from "../Logo/Logo";
import NavButtons from "../NavButtons/NavButtons";
import SocialIcons from "../SocialIcons/SocialIcons";
function Footer({ className }: { className?: string }) {
  const owner = [
    ...navbarButtons,
    // {
    //   href: "owner",
    //   title: "Owner",
    //   Icon: IconUser,
    // },
  ];
  return (
    <div
      className={`border-t dark:border-slate-800 border-slate-200 py-4 w-full ${className}`}
    >
      <Container className="flex flex-col items-center justify-between gap-6 pb-4">
        <Logo width={48} height={48} includeTitle href="/" />
        <NavButtons
          buttons={owner}
          excludeIcons
          className="flex-wrap items-center justify-center"
        />
        <SocialIcons alt />
        <span>
          Copyright &copy;{new Date().getFullYear()}{" "}
          <A href="/" className="underline">
            {TITLE}
          </A>
          , all rights reserved
        </span>
      </Container>
    </div>
  );
}

export default Footer;
