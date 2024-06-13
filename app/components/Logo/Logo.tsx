import React from "react";
import Image from "next/image";
import Title from "./Title";
import { TITLE, PRIMARY_COLOR_ALT, PRIMARY_COLOR } from "@/constants";
import Link from "next/link";
import { cn } from "@/utils";

function Logo({
  width,
  height,
  includeTitle,
  href,
  className,
}: {
  width?: number;
  height?: number;
  includeTitle?: boolean;
  href?: string;
  className?: string;
}) {
  if (href)
    return (
      <Link href={href} className={cn("flex items-center gap-3 ", className)}>
        {width && height ? (
          <Image
            src="/svg/logo.svg"
            alt={TITLE + "logo"}
            width={width}
            height={height}
          />
        ) : (
          <Image src="/svg/logo.svg" alt="Codelighthouse logo" fill />
        )}
        {includeTitle ? (
          <Title
            title={TITLE}
            charSplit={4}
            colorSplit={[PRIMARY_COLOR_ALT, PRIMARY_COLOR]}
          />
        ) : null}
      </Link>
    );
  return (
    <div className="flex items-center gap-3">
      {width && height ? (
        <Image
          src="svg/logo.svg"
          alt={TITLE + "logo"}
          width={width}
          height={height}
        />
      ) : (
        <Image src="/svg/logo.svg" alt="Codelighthouse logo" fill />
      )}
      {includeTitle ? (
        <Title
          title={TITLE}
          charSplit={4}
          colorSplit={[PRIMARY_COLOR_ALT, PRIMARY_COLOR]}
        />
      ) : null}
    </div>
  );
}

export default Logo;
