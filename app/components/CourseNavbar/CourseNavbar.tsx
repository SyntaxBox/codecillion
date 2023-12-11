import { Container, IconButton } from "@/app/UI";
import React from "react";
import DarkMode from "../DarkMode/DarkMode";
import Logo from "../Logo/Logo";
import { IconBrandGithub, IconBrandYoutube } from "@tabler/icons-react";

function CourseNavbar({
  title,
  youtubeLink,
  githubLink,
}: {
  title: string;
  youtubeLink?: string;
  githubLink?: string;
}) {
  return (
    <nav className="backdrop-blur-md bg-slate-900 z-[51] w-full h-[56px] text-gray-700 relative dark:border-slate-600 dark:border-b shadow-[0px_0px_10px_0px_#0f172a]">
      <Container className="flex items-center justify-between">
        <div className="flex gap-3 items-center justify-center">
          <Logo width={40} height={40} href="/" />
          <p className="text-white font-bold line-clamp-1 text-ellipsis overflow-hidden">
            {title}
          </p>
        </div>
        <div className="flex items-center gap-3 md:gap-6">
          {youtubeLink && (
            <IconButton
              title={"YouTube Playlist"}
              Icon={IconBrandYoutube}
              href={youtubeLink}
            />
          )}
          {githubLink && (
            <IconButton
              title={"Github Repo"}
              Icon={IconBrandGithub}
              href={githubLink}
            />
          )}
          <DarkMode whiteMoon />
        </div>
      </Container>
    </nav>
  );
}

export default CourseNavbar;
