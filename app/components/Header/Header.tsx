import BigTitle from "@/app/UI/Typography/BigTitle";
import Container from "@/app/UI/layout/Container";
import React from "react";
import Search from "../Search/Search";
import P from "@/app/UI/Typography/P";

function Header({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Container>
      <section className="relative  mb-12 mx-auto flex items-center p-2 flex-col h-[180px]">
        <div className="flex items-center flex-col gap-3 w-[80%]">
          <BigTitle>{title}</BigTitle>
          <p className="tracking-wider text-slate-700 dark:text-slate-300 text-center">
            {description}
          </p>
        </div>
        <div className="absolute -bottom-7 w-[480px]">
          <Search placeholder="Search courses Python, react ..." />
        </div>
      </section>
    </Container>
  );
}

export default Header;
