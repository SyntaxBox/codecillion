"use client";
import Container from "@/app/UI/layout/Container";
import React from "react";
import ComingSoon from "../components/ComingSoon/ComingSoon";

function page() {
  return (
    <ComingSoon
      description="We apologize for any inconvenience caused, but please note that the
        recording and documentation of this section are currently in progress
        and will be completed soon. Thank you for your understanding and
        patience."
    />
  );
}

export default page;