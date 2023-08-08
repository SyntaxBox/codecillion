"use client";
import React, { useEffect, useState } from "react";
import SearchModel from "../SearchModel/SearchModel";
import SearchBox from "../SearchBox/SearchBox";
import { SearchCard } from "@/interfaces/Cards";
import { search } from "@/sanity/utils/search";

function Search({
  placeholder,
  objectsType,
}: {
  objectsType: "post" | "course";
  placeholder: string;
}) {
  const [searchText, setSearchText] = useState("");
  const [fetchedObjects, setFetchedObjects] = useState<SearchCard[]>([]);
  const [showModal, setShowModal] = useState(false);
  const fetchData = async (type: "post" | "course") => {
    setFetchedObjects(await search({ type }));
  };
  useEffect(() => {
    fetchData(objectsType);
  }, [objectsType]);

  return (
    <div className="relative">
      <SearchBox
        placeholder={placeholder}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setShowModal(true)}
        onBlur={() => setTimeout(() => setShowModal(false), 3000)}
      />
      <div className="absolute top-12 left-0 z-10 w-full">
        {searchText.length > 2 && showModal && (
          <SearchModel searchString={searchText} data={fetchedObjects} />
        )}
      </div>
    </div>
  );
}

export default Search;
