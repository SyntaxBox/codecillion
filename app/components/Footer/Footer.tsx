import Container from "@/app/UI/layout/Container";
import React from "react";
import Logo from "../Logo/Logo";
import NavButtons from "../NavButtons/NavButtons";
import { navbarButtons } from "@/data/elements/navbar";
import { IconUser } from "@tabler/icons-react";
import SocialIcons from "../SocialIcons/SocialIcons";
import A from "@/app/UI/Typography/A";
import { TITLE } from "@/constants/other/title";
function Footer({ className }: { className?: string }) {
  const owner = [
    ...navbarButtons,
    {
      href: "owner",
      title: "Owner",
      Icon: IconUser,
    },
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
