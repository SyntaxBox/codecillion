import { SearchCard } from "@/interfaces/Cards";
import { search } from "@/logic/search";
import React from "react";
import SearchResult from "../SearchResult/SearchResult";

function SearchModel({
  data,
  searchString,
}: {
  data: SearchCard[];
  searchString: string;
}) {
  const searchResult = search(data, searchString);
  return (
    <div
      className="w-full min-h-[40px] max-h-96 bg-slate-200
   dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 shadow-slate-100 dark:shadow-slate-800"
    >
      {searchResult.length === 0 && (
        <div className="flex pt-3 items-center justify-center w-full h-full">
          <p>No items found :(</p>
        </div>
      )}
      <SearchResult data={searchResult} searchString={searchString} />
    </div>
  );
}

export default SearchModel;
