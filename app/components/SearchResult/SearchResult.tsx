"use client";
import { SearchCard } from "@/interfaces/Cards";
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
  if (!pageName) return;
  return (
    <div className="w-full h-full flex flex-col gap-4 py-2 overflow-y-scroll">
      {data.map(({ thumbnail, title, slug }, i) => {
        return (
          <SearchResultItem
            key={i}
            title={title}
            thumbnail={thumbnail}
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
