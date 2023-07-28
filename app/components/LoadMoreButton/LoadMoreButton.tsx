"use client";
import { IconDots, IconFidgetSpinner } from "@tabler/icons-react";
import React, { useState } from "react";

type props = {
  text: string;
  loading: boolean;
  loadingText?: string;
} & JSX.IntrinsicElements["button"];

function LoadMoreButton({ text, loading, loadingText, ...rest }: props) {
  return (
    <button
      {...rest}
      className="flex gap-3 items-center bg-primary-op1 text-primary-600 dark:bg-primary-alt-op1 dark:text-primary-alt-500 rounded-lg px-4 py-3 focus:shadow-lg hover:scale-105"
    >
      {loading === false ? (
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

export default LoadMoreButton;
