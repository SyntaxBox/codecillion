import React from "react";
import { courses } from "@/mocks/courses";
import Courses from "../components/Courses/Courses";
import Header from "../components/Header/Header";
import LoadMore from "../components/LoadMore/LoadMore";
import Footer from "../components/Footer/Footer";

export default function Page() {
  return (
    <main className="flex items-center gap-6 flex-col">
      <Header
        title="Courses"
        description="Master coding with our diverse range of courses. From beginners to experts, unleash your programming potential."
      />
      <Courses courses={courses} />
      <LoadMore text="Load More" loadingText="Loading" />
      <Footer />
    </main>
  );
}

function wordsCounter(phrase: string) {
  var count = 0;
  var ws = false;
  for (var i = 0; i < phrase.length; i++) {
    var currentChar = phrase[i];
    if (currentChar !== " ") {
      if (!ws) {
        count++;
        ws = true;
      }
    } else ws = false;
  }
  return count;
}
console.log(1, wordsCounter("hello world"));
console.log(2, wordsCounter(" this is a string "));
console.log(2, wordsCounter(" there  is  many  words  here  "));
console.log(4, wordsCounter("    word"));
