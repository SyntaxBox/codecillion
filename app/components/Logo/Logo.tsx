import React from "react";
import Image from "next/image";
import Title from "./Title";
import { PRIMARY_COLOR_ALT, PRIMARY_COLOR } from "@/constants/styles/colors";
import Link from "next/link";
import { TITLE } from "@/constants/other/title";

function Logo({
  width,
  height,
  includeTitle,
  href,
}: {
  width?: number;
  height?: number;
  includeTitle?: boolean;
  href?: string;
}): React.ReactElement {
  if (href)
    return (
      <Link href={href} className="flex items-center gap-3">
        {width && height ? (
          <Image
            src="svg/logo.svg"
            alt={TITLE + "logo"}
            width={width}
            height={height}
          />
        ) : (
          <Image src="svg/logo.svg" alt="Codelighthouse logo" fill />
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
        <Image src="svg/logo.svg" alt="Codelighthouse logo" fill />
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
