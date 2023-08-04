import React from "react";
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";
import Code from "../Code/Code";
import Link from "next/link";

const components = {
  types: {
    paragraph: ({ children }: any) => {
      return (
        <p className="text-[32px] text-slate-800 dark:text-slate-200  my-2">
          {children}
        </p>
      );
    },
    codeBlock: Code,
  },
  block: {
    h2: ({ children }: any) => {
      return (
        <h2 className="font-bold mt-8 text-primary-600 dark:text-primary-alt-500 text-3xl">
          {children}
        </h2>
      );
    },
    h3: ({ children }: any) => {
      return (
        <h3 className="font-bold mt-8 text-primary-600 dark:text-primary-alt-500 text-2xl">
          {children}
        </h3>
      );
    },
    h4: ({ children }: any) => {
      return (
        <h4 className="font-bold mt-8 text-primary-600 dark:text-primary-alt-500 text-xl">
          {children}
        </h4>
      );
    },
    h5: ({ children }: any) => {
      return (
        <h5 className="whiteText text-primary-600 dark:text-primary-alt-500 text-lg">
          {children}
        </h5>
      );
    },
    h6: ({ children }: any) => {
      return (
        <h6 className="whiteText text-primary-600 dark:text-primary-alt-500 text-lg">
          {children}
        </h6>
      );
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const { href } = value;
      return (
        <Link
          href={href}
          className="text-primary-600 dark:text-primary-alt-500 hover:text-primary-alt-500 hover:dark:text-primary-600"
        >
          {children}
        </Link>
      );
    },
    strong: ({ children }: any) => {
      return <strong className="text-lg">{children}</strong>;
    },
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => <ul className="mt-xl">{children}</ul>,
    number: ({ children }: any) => <ol className="mt-lg">{children}</ol>,
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => <li className="list-disc">{children}</li>,
  },
};

function PostContent({ content }: { content: PortableTextBlock[] }) {
  return (
    <section className="w-full" id="page-content">
      <PortableText value={content} components={components} />
    </section>
  );
}

export default PostContent;
