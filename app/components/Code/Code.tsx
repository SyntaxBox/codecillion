import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
interface Props {
  code: string;
  language: string;
}
const Code: React.FC<Props> = (props) => {
  const { code, language } = props;
  return (
    <SyntaxHighlighter language={language} style={dark}>
      {code}
    </SyntaxHighlighter>
  );
};

export default Code;
