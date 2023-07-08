import React from "react";

function Description({ text, blur }: { text: string; blur?: boolean }) {
  return (
    <p
      className={`${
        blur && "backdrop-blur-sm bg-[#8989892f] p-4 w-[80%]"
      } rounded-lg text-lg text-white leading-loose spacing tracking-wide `}
    >
      {text}
    </p>
  );
}

export default Description;
