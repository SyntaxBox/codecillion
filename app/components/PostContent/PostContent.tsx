import React from "react";
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";
import Code from "../Code/Code";

const components = {
  types: {
    codeBlock: Code,
  },
};

function PostContent({ content }: { content: PortableTextBlock[] }) {
  return (
    <section className="w-full border-r border-l border-slate-200 dark:border-slate-700 shadow-2xl shadow-slate-200 dark:shadow-slate-700 p-2 sm:p-4">
      <PortableText value={content} components={components} />
    </section>
  );
}

export default PostContent;
