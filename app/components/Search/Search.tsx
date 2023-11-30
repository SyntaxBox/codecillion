"use client";
import React, { useEffect, useState } from "react";
import SearchModel from "../SearchModel/SearchModel";
import SearchBox from "../SearchBox/SearchBox";
import { SearchCard } from "@/interfaces";
import { search } from "@/sanity";

function Search({
  placeholder,
  objectsType,
}: {
  objectsType: "post" | "course";
  placeholder: string;
}) {
  const [focus, setFocus] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [fetchedObjects, setFetchedObjects] = useState<SearchCard[]>([]);
  const [showModal, setShowModal] = useState(false);

  const fetchData = async (type: "post" | "course") => {
    setFetchedObjects(await search({ type }));
  };

  useEffect(() => {
    if (focus) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [focus]);

  useEffect(() => {
    fetchData(objectsType);
  }, [objectsType]);

  return (
    <>
      <SearchBox
        value=""
        onChange={() => {}}
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
      />
      {focus && (
        <div
          className="fixed z-[1000] top-0 left-0 backdrop-blur-md w-screen h-screen"
          onClick={() => setFocus(false)}
        >
          <div
            className="relative w-full max-w-[488px] mx-auto mt-[8vh] p-2 flex flex-col gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <SearchBox
              placeholder={placeholder}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onFocus={() => setShowModal(true)}
              onBlur={() => setTimeout(() => setShowModal(false), 3000)}
            />
            {searchText.length > 2 && showModal && (
              <SearchModel searchString={searchText} data={fetchedObjects} />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Search;
