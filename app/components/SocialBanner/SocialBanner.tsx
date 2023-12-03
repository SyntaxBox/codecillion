import { Container, BigTitle } from "@/app/UI";
import { TITLE } from "@/constants";
import Image from "next/image";
import React from "react";

function SocialBanner() {
  return (
    <Container>
      <div className="relative -z-20 overflow-hidden w-full rounded-xl p-4 bg-gradient-to-r from-primary-400 dark:from-primary-800 dark:to-primary-700 to-primary-alt-500 shadow-2xl shadow-slate-100 dark:shadow-slate-800">
        <Image
          className="-z-10 absolute -rotate-[24deg] -right-7 scale-150 md:scale-100 "
          src="/images/social-icons.png"
          alt="social media icons"
          width={3340 / 4}
          height={1794 / 4}
        />

        <div className="flex flex-col sm:py-4 justify-center h-full w-fit">
          <p className="uppercase drop-shadow-[2px_2px_1px_#000000] text-xl md:text-3xl font-bold text-white">
            Follow us on Social media
          </p>
          <p
            className="text-4xl sm:text-6xl w-fit font-bold bg-gradient-to-r from-primary-900 to-primary-800
          dark:from-cyan-400 dark:via-emerald-300 dark:to-cyan-400
          drop-shadow-[0_1px_1px_#78c7ff]
          dark:drop-shadow-[0px_1px_1px_rgb(0, 255, 157)]  gradient-text py-2 "
          >
            @{TITLE}
          </p>
        </div>
      </div>
    </Container>
  );
}

export default SocialBanner;
