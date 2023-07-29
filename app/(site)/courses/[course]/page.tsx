"use client";
import ComingSoon from "@/app/components/ComingSoon/ComingSoon";
import { courseMetadata } from "@/data/meta/pages";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "hello world",
};

export default function page() {
  return (
    <ComingSoon
      description="We apologize for any inconvenience caused, but please note that the
        recording and documentation of this section are currently in progress
        and will be completed soon. Thank you for your understanding and
        patience."
    />
  );
}
