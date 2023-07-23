import { size, stroke } from "@/constants/elements/icons";
import { IconSearch } from "@tabler/icons-react";
import React, { ChangeEventHandler } from "react";

type props = {} & JSX.IntrinsicElements["input"];

function SearchBox({ ...rest }: JSX.IntrinsicElements["input"]) {
  return (
    <div className="relative">
      <input
        {...rest}
        type="text"
        className="w-full pl-10 pr-4 py-2 bg-slate-200 dark:bg-slate-700  rounded-lg shadow-2xl shadow-slate-200 dark:shadow-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:ring-primary-alt-500 placeholder:text-gray-400 dark:placeholder:text-gray-300"
      />
      <IconSearch
        size={size}
        stroke={stroke}
        className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-300"
      />
    </div>
  );
}

export default SearchBox;
