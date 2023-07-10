import React from "react";

function Description({ text }: { text: string }) {
  return (
    <p className={`text-lg text-white leading-loose spacing tracking-wide `}>
      {text}
    </p>
  );
}

export default Description;
