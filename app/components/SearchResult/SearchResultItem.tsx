import { SearchCard } from "@/interfaces/Cards";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function SearchResultItem({
  thumbnail,
  title,
  slug,
  pageName,
  searchString,
}: SearchCard & { pageName: string; searchString: string }) {
  // Create an array of search words
  const searchArray = searchString.split(" ");

  // Split the mainString into parts based on the search words
  const parts = title.split(new RegExp(`(${searchArray.join("|")})`, "gi"));

  // Wrap the search words in <span> tags for highlighting
  const highlightedText = parts.map((part, index) => {
    if (searchArray.includes(part.toLowerCase())) {
      return (
        <span
          key={index}
          className="bg-primary-600 dark:bg-primary-alt-500 text-white dark:text-black"
        >
          {part}
        </span>
      );
    }
    return part;
  });

  return (
    <Link
      href={`${pageName}/${slug}`}
      className="w-full flex items-center px-2 gap-3"
    >
      <Image
        src={thumbnail}
        width={80}
        height={40}
        alt={`${title} thumbnail`}
        className="rounded-lg"
      />
      <p className="w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
        {highlightedText}
      </p>
    </Link>
  );
}

export default SearchResultItem;
