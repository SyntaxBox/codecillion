import BigTitle from "@/app/UI/Typography/BigTitle";
import Container from "@/app/UI/layout/Container";
import React from "react";
import Search from "../Search/Search";

function Header({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Container>
      <section className="relative mb-12 w-full flex items-center p-2 flex-col h-[180px] bg-gradient-to-br from-primary-600 to-primary-alt-600 rounded-2xl shadow-2xl shadow-slate-200 dark:shadow-slate-700">
        <BigTitle>{title}</BigTitle>
        <p className="tracking-wider text-white">{description}</p>
        <div className="absolute -bottom-7 w-[480px]">
          <Search placeholder="Search courses Python, react ..." />
        </div>
      </section>
    </Container>
  );
}

export default Header;
