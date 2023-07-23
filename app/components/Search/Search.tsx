"use client";
import React, { useEffect, useState } from "react";
import SearchModel from "../SearchModel/SearchModel";
import SearchBox from "../SearchBox/SearchBox";
import { SearchCard } from "@/interfaces/Cards";
import { posts } from "@/mocks/posts";

function Search({
  placeholder,
  objectsType,
}: {
  objectsType: string;
  placeholder: string;
}) {
  const [searchText, setSearchText] = useState("");
  const [fetchedObjects, setFetchedObjects] = useState<SearchCard[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setFetchedObjects(
      posts.map(({ image, title, slug }) => {
        return { image, title, slug };
      })
    );
  }, [objectsType]);

  return (
    <div className="relative">
      <SearchBox
        placeholder={placeholder}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setShowModal(true)}
        onBlur={() => setShowModal(false)}
      />
      <div className="absolute top-12 left-0 z-10 w-full">
        {searchText.length > 3 && showModal && (
          <SearchModel searchString={searchText} data={fetchedObjects} />
        )}
      </div>
    </div>
  );
}

export default Search;
