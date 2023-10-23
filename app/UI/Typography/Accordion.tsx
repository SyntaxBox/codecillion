"use client";
import { IconArrowBadgeUpFilled } from "@tabler/icons-react";
import React, { useState } from "react";
import A from "./A";

function Accordion() {
  const [show, setShow] = useState(false);
  const isLast = true;
  const isFirst = true;
  const links: { title: string; slug: string }[] = [
    {
      title: "Introduction to HTML",
      slug: "introduction",
    },
  ];
  return (
    <>
      <h2>
        <button
          onClick={() => setShow(!show)}
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200  ${
            isLast && !show ? "rounded-b-xl" : ""
          }
          ${isFirst ? "rounded-t-xl" : ""}
          ${show ? "border-b-0" : ""}
          focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800`}
        >
          <span>What is Flowbite?</span>
          <IconArrowBadgeUpFilled className={`${show ? "rotate-180" : ""}`} />
        </button>
      </h2>
      <div className={`${show ? "scale-y-100 " : "scale-y-0"} transition-none`}>
        <div
          className={`p-5 border ${
            isLast ? "rounded-b-xl" : "border-b-0"
          } border-gray-200 dark:border-gray-700 dark:bg-gray-900`}
        >
          {links.map(({ title, slug }, i) => {
            return (
              <A key={i} href={slug}>
                {title}
              </A>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Accordion;
