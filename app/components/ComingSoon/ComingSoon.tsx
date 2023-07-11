import A from "@/app/UI/Typography/A";
import Container from "@/app/UI/layout/Container";
import React from "react";

function ComingSoon({ description }: { description: string }) {
  return (
    <Container className="flex tracking-widest gap-3 h-full my-auto flex-col items-center justify-center">
      <span className="gradient-text bg-gradient-to-r pb-5 from-primary-500 to-primary-alt-500 font-bold text-7xl mt-16">
        ¯⁠\⁠_⁠(⁠ツ⁠)⁠_⁠/⁠¯
      </span>
      <h1 className="gradient-text bg-gradient-to-r pb-5 from-primary-500 to-primary-alt-500 font-bold text-9xl mb-10">
        Coming Soon...
      </h1>
      <p className="text-lg tracking-wider text-slate-700 dark:text-slate-300 leading-6 text-center">
        {description}
      </p>
      <A href="/" className="underline mt-2">
        Go home
      </A>
    </Container>
  );
}

export default ComingSoon;
