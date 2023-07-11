"use client";
import Container from "@/app/UI/layout/Container";
import React from "react";

function page() {
  return (
    <Container className="flex tracking-widest gap-3 h-full my-auto flex-col items-center justify-center">
      <span className="gradient-text bg-gradient-to-r pb-5 from-primary-500 to-primary-alt-500 font-bold text-7xl mt-16">
        ¯⁠\⁠_⁠(⁠ツ⁠)⁠_⁠/⁠¯
      </span>
      <h1 className="gradient-text bg-gradient-to-r pb-5 from-primary-500 to-primary-alt-500 font-bold text-9xl mb-10">
        Coming Soon...
      </h1>
      <p className="text-lg tracking-wider text-slate-700 dark:text-slate-300 leading-6 text-center">
        We apologize for any inconvenience caused, but please note that the
        recording and documentation of this course are currently in progress and
        will be completed soon. Thank you for your understanding and patience.
      </p>
    </Container>
  );
}

export default page;
