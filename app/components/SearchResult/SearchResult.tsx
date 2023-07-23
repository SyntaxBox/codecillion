"use client";
import { Card, SearchCard } from "@/interfaces/Cards";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import SearchResultItem from "./SearchResultItem";

function SearchResult({
  data,
  searchString,
}: {
  data: SearchCard[];
  searchString: string;
}) {
  const router = usePathname();
  const pageName = router;
  return (
    <div className="w-full h-full flex flex-col gap-4 py-2 overflow-y-scroll">
      {data.map(({ image, title, slug }, i) => {
        return (
          <SearchResultItem
            key={i}
            title={title}
            image={image}
            slug={slug}
            pageName={pageName}
            searchString={searchString}
          />
        );
      })}
    </div>
  );
}

export default SearchResult;
