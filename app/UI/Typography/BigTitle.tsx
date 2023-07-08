import React, { ReactNode } from "react";

function BigTitle({ children }: { children: ReactNode }) {
  const style = {
    textShadow: "1px 1px #000000",
  };
  return (
    <h1 style={style} className="uppercase text-[64px] font-bold text-white">
      {children}
    </h1>
  );
}

export default BigTitle;
