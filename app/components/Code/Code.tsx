import React from "react";
import { Code as SyntaxHighlighter } from "bright";

interface Props {
  value: {
    code: string;
    language: string;
  };
}
const Code: React.FC<Props> = (props) => {
  const { code, language } = props.value;
  return <SyntaxHighlighter lang={language}>{code}</SyntaxHighlighter>;
};

export default Code;
