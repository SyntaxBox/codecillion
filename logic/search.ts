import { SearchCard } from "@/interfaces/Cards";

export function search(data: SearchCard[], search: string) {
  const searchWords = search.toLowerCase().split(" ");

  // Use the filter method to find objects whose title contains all search words
  const searchResults = data.filter((obj) =>
    searchWords.every((word) => obj.title.toLowerCase().includes(word))
  );

  return searchResults;
}
