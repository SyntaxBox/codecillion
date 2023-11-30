import { PRIMARY_COLOR } from "@/constants/styles/colors";
import React from "react";

function Title({
  title = "Codecillion",
  colorSplit,
  charSplit,
  color = PRIMARY_COLOR,
}: {
  title: string;
  colorSplit?: [string, string];
  charSplit?: number;
  color?: string;
}) {
  return (
    <p className="font-semibold text-2xl">
      {colorSplit && charSplit ? (
        <>
          <span style={{ color: colorSplit[0] }}>
            {title.substring(0, charSplit)}
          </span>
          <span style={{ color: colorSplit[1] }}>
            {title.substring(charSplit, title.length)}
          </span>
        </>
      ) : (
        <span style={{ color }}>{title}</span>
      )}
    </p>
  );
}

export default Title;
