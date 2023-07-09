"use client";
import { size, stroke } from "@/constants/elements/icons";
import { IconSearch } from "@tabler/icons-react";
import React from "react";

function Search({ placeholder }: { placeholder: string }) {
  return (
    <div className="relative w-full flex gap-4">
      <div className="absolute inset-y-0 -left-2 flex items-center pl-4 pointer-events-none">
        <IconSearch stroke={stroke} size={size} />
      </div>
      <input
        type="search"
        className="block w-full p-5 pl-10 text-gray-900 border rounded-xl bg-slate-100 focus:border-primary-500 dark:bg-slate-800 border-primary-op1 dark:border-primary-alt-op1 dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-alt-500 outline-none shadow-md focus:shadow-lg shadow-slate-200 dark:shadow-slate-700"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default Search;
