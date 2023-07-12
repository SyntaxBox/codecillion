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
      <section className="relative  lg:mb-12 mx-auto flex items-center p-2 flex-col gap-8">
        <div className="flex items-center flex-col gap-3 md:w-[80%]">
          <h1 className="uppercase text-[40px] font-bold text-black dark:text-white">
            {title}
          </h1>
          <p
            style={{ textAlignLast: "center" }}
            className="tracking-wider text-slate-700 dark:text-slate-300 md:text-center text-justify"
          >
            {description}
          </p>
        </div>
        <div className=" w-full md:w-[480px]">
          <Search placeholder="Search courses Python, react ..." />
        </div>
      </section>
    </Container>
  );
}

export default Header;
