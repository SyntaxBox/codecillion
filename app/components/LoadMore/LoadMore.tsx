"use client";
import { IconDots, IconFidgetSpinner } from "@tabler/icons-react";
import React, { useState } from "react";

enum STATE {
  LOADING,
  LOADED,
}

function LoadMore({
  text,
  loadingText,
}: {
  text: string;
  loadingText?: string;
}) {
  const [state, setState] = useState(STATE.LOADED);

  const handleClick = () => {
    setState(STATE.LOADING);
  };
  return (
    <button
      onClick={handleClick}
      className="flex gap-3 items-center bg-primary-op1 text-primary-600 dark:bg-primary-alt-op1 dark:text-primary-alt-500 rounded-lg px-4 py-3 focus:shadow-lg hover:scale-105"
    >
      {state === STATE.LOADED ? (
        <>
          <IconDots />
          {text}
        </>
      ) : (
        <>
          <IconFidgetSpinner className="animate-spin" />
          {loadingText ? loadingText : text}
        </>
      )}{" "}
    </button>
  );
}

export default LoadMore;
