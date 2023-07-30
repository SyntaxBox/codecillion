import React from "react";
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";
import Code from "../Code/Code";

const components = {
  types: {
    codeBlock: Code,
  },
};

function PostContent({
  content,
  className,
}: {
  content: PortableTextBlock[];
  className?: string;
}) {
  return (
    <section className={`w-full ${className}`}>
      <PortableText value={content} components={components} />
    </section>
  );
}

export default PostContent;
