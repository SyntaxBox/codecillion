import React from "react";
import { Code as SyntaxHighlighter } from "bright";
import { fileIcons } from "./extensions";

interface Props {
  value: {
    title: string;
    code: string;
    language: string;
  };
}
const Code: React.FC<Props> = (props) => {
  const { title, code, language } = props.value;
  return (
    <SyntaxHighlighter
      theme={"dracula"}
      extensions={[fileIcons]}
      lang={language}
      title={title}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default Code;
